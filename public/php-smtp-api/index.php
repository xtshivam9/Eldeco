<?php

/**
 * SMTP API Endpoint
 * 
 * This script accepts POST requests with JSON data to send emails via SMTP.
 */

// Include PHPMailer classes
// If you used Composer: require 'vendor/autoload.php';
// If you downloaded manually, include the files directly:
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Check if vendor/autoload.php exists
if (file_exists('vendor/autoload.php')) {
    require 'vendor/autoload.php';
} else {
    // Fallback for manual installation (assuming files are in PHPMailer directory)
    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';
}

require_once 'config.php';

// Set headers for JSON response
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-API-KEY');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// 1. Basic Security Check
$providedApiKey = $_SERVER['HTTP_X_API_KEY'] ?? $_GET['api_key'] ?? null;
if (defined('API_KEY') && !empty(API_KEY) && $providedApiKey !== API_KEY) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized: Invalid API Key']);
    exit;
}

// 2. Read JSON Input
$inputData = json_decode(file_get_contents('php://input'), true);

if (!$inputData) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid JSON input']);
    exit;
}

// 3. Validate Required Fields
$to = $inputData['to'] ?? null;
$subject = $inputData['subject'] ?? 'No Subject';
$body = $inputData['body'] ?? null;
$isHtml = $inputData['html'] ?? true;

if (!$to || !$body) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Missing required fields: to, body']);
    exit;
}

// 4. Initialize PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = SMTP_AUTH;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE;
    $mail->Port       = SMTP_PORT;

    // Recipients
    $mail->setFrom(SENDER_EMAIL, SENDER_NAME);
    
    // Handle multiple recipients if provided as array
    if (is_array($to)) {
        foreach ($to as $recipient) {
            $mail->addAddress($recipient);
        }
    } else {
        $mail->addAddress($to);
    }

    // Content
    $mail->isHTML($isHtml);
    $mail->Subject = $subject;
    $mail->Body    = $body;
    $mail->AltBody = strip_tags($body); // Plain text version for non-HTML mail clients

    // Optional: Add attachments
    if (isset($inputData['attachments']) && is_array($inputData['attachments'])) {
        foreach ($inputData['attachments'] as $attachment) {
            if (isset($attachment['path'])) {
                $mail->addAttachment($attachment['path'], $attachment['name'] ?? '');
            }
        }
    }

    // Send email
    $mail->send();
    
    echo json_encode([
        'status' => 'success',
        'message' => 'Email has been sent successfully',
        'details' => [
            'to' => $to,
            'subject' => $subject
        ]
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"
    ]);
}
