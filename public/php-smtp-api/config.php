<?php

/**
 * SMTP API Configuration
 * 
 * Replace these placeholders with your actual SMTP server details.
 */

// SMTP Server Settings
define('SMTP_HOST', 'smtp.example.com');      // Your SMTP server (e.g., smtp.gmail.com)
define('SMTP_PORT', 587);                     // TCP port to connect to (587 is standard for TLS)
define('SMTP_USER', 'your-email@example.com'); // SMTP username
define('SMTP_PASS', 'your-password');         // SMTP password
define('SMTP_AUTH', true);                    // Enable SMTP authentication
define('SMTP_SECURE', 'tls');                 // Enable TLS encryption; `ssl` also accepted

// Default Sender Info
define('SENDER_EMAIL', 'your-email@example.com');
define('SENDER_NAME', 'SMTP API Service');

// API Security (Optional but recommended)
define('API_KEY', 'your-secret-api-key-here');
