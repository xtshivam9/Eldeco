# PHP SMTP API

A simple, secure, and properly structured PHP API for sending emails via SMTP.

## Features
- JSON-based POST requests
- SMTP Authentication (TLS/SSL)
- HTML Email support
- API Key security
- Multiple recipient support
- Attachment support

## Setup Instructions

### 1. Install PHPMailer (Recommended)
This API uses **PHPMailer**, the industry standard for PHP email.

#### Option A: Using Composer (Best Practice)
Run this command in the `php-smtp-api` directory:
```bash
composer require phpmailer/phpmailer
```

#### Option B: Manual Installation
1. Download the source code from [PHPMailer GitHub](https://github.com/PHPMailer/PHPMailer).
2. Extract it and rename the folder to `PHPMailer`.
3. Ensure the folder structure looks like this:
   ```
   php-smtp-api/
   ├── PHPMailer/
   │   ├── src/
   │   │   ├── PHPMailer.php
   │   │   ├── SMTP.php
   │   │   └── Exception.php
   ├── config.php
   ├── index.php
   └── README.md
   ```

### 2. Configure SMTP Settings
Open `config.php` and update the following:
- `SMTP_HOST`: Your SMTP server (e.g., `smtp.gmail.com`).
- `SMTP_USER`: Your email address.
- `SMTP_PASS`: Your email password (or App Password).
- `API_KEY`: A secret key to secure your API.

## Usage Guide

### Send an Email
Make a `POST` request to `index.php`.

**Endpoint:** `http://your-domain.com/php-smtp-api/index.php`

**Headers:**
- `Content-Type: application/json`
- `X-API-KEY: your-secret-api-key-here`

**Request Body:**
```json
{
    "to": "recipient@example.com",
    "subject": "Hello from SMTP API",
    "body": "<h1>Success!</h1><p>This email was sent via the PHP SMTP API.</p>",
    "html": true
}
```

### Response (Success)
```json
{
    "status": "success",
    "message": "Email has been sent successfully",
    "details": {
        "to": "recipient@example.com",
        "subject": "Hello from SMTP API"
    }
}
```

### Response (Error)
```json
{
    "status": "error",
    "message": "Message could not be sent. Mailer Error: ..."
}
```

## Security Tips
1. **App Passwords:** If using Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your main password.
2. **CORS:** Update `Access-Control-Allow-Origin` in `index.php` to your specific domain instead of `*` for production.
3. **HTTPS:** Always serve your API over HTTPS to protect your API Key and email content.
