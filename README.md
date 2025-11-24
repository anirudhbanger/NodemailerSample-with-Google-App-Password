# NodemailerSample-with-Google-App-Password

Sample code to use nodemailer to send emails using a Google account which is authenticated using App Password.

## Description

This project demonstrates how to send emails using Node.js with the Nodemailer package and Gmail SMTP server. It uses Google App Passwords for secure authentication, following best practices for credential management.

## Prerequisites

- Node.js installed on your system
- A Gmail account
- Google App Password (see setup instructions below)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/anirudhbanger/NodemailerSample-with-Google-App-Password.git
cd NodemailerSample-with-Google-App-Password
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Generate Google App Password

To use Gmail with Nodemailer, you need to create an App Password:

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App Passwords** (you'll see this option after enabling 2-Step Verification)
5. Select **Mail** as the app and **Other** as the device
6. Enter a custom name (e.g., "Nodemailer")
7. Click **Generate**
8. Copy the 16-character password (this is your App Password)

### 4. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   EMAIL_TO=recipient@example.com
   ```

   **Important:** Replace the placeholders with your actual email and App Password.

### 5. Run the Application

```bash
node index.js
```

If everything is configured correctly, you should see:
```
Email sent successfully!
Message ID: <message-id>
Response: 250 2.0.0 OK ...
```

## Project Structure

```
.
├── index.js           # Main application file
├── package.json       # Project dependencies
├── .env.example       # Environment variables template
├── .env               # Your environment variables (not tracked by git)
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## How It Works

1. The application loads environment variables from the `.env` file using `dotenv`
2. Creates a transporter using Nodemailer with Gmail SMTP configuration
3. Defines email options (from, to, subject, text, html)
4. Sends the email using the transporter
5. Logs the result (success or error)

## Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of your actual Gmail password
- The `.env` file is included in `.gitignore` to prevent accidental commits
- App Passwords are more secure as they can be revoked without changing your main password

## Troubleshooting

### "Invalid login: 535-5.7.8 Username and Password not accepted"
- Make sure you're using an App Password, not your regular Gmail password
- Verify that 2-Step Verification is enabled on your Google Account
- Double-check that you've copied the App Password correctly (no spaces)

### "Error: getaddrinfo ENOTFOUND smtp.gmail.com"
- Check your internet connection
- Verify that your firewall/antivirus is not blocking the connection

### Email not received
- Check the spam/junk folder
- Verify the recipient email address is correct
- Make sure the sender email matches your EMAIL_USER

## License

ISC

## References

- [Nodemailer Official Documentation](https://nodemailer.com/)
- [Google App Passwords Help](https://support.google.com/accounts/answer/185833)
- [GeeksforGeeks Tutorial: How to Send Email Using Node.js](https://www.geeksforgeeks.org/node-js/how-to-send-email-using-node-js/)
