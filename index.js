// Load environment variables from .env file
require('dotenv').config();

// Import nodemailer
const nodemailer = require('nodemailer');

// Create a transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Define email options
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent from Node.js using Nodemailer and Google App Password.',
    html: '<h1>Hello!</h1><p>This is a test email sent from Node.js using Nodemailer and Google App Password.</p>'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error.message);
        console.log('Error code:', error.code);
        
        // Provide helpful troubleshooting hints
        if (error.code === 'EAUTH' || error.responseCode === 535) {
            console.log('\nTroubleshooting tip: Authentication failed. Please check:');
            console.log('- You are using an App Password, not your regular Gmail password');
            console.log('- 2-Step Verification is enabled on your Google Account');
            console.log('- The App Password is entered correctly in your .env file');
        } else if (error.code === 'EDNS' || error.code === 'ENOTFOUND') {
            console.log('\nTroubleshooting tip: Network connection issue. Please check:');
            console.log('- Your internet connection is working');
            console.log('- Firewall/antivirus is not blocking the connection');
        }
    } else {
        console.log('Email sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log('Response:', info.response);
    }
});
