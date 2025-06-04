const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// sending contact details to my mail
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tomerlevy0404@gmail.com',     
      pass: 'qavnxoaaawzyicqv'         
    }
  });

  const mailOptions = {
    from: email,
    to: 'tomerlevy0404@gmail.com',          
    subject: `New message from ${name}`,
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending mail:', error);
      res.status(500).send('Something went wrong.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Message sent!');
    }
  });
});

// server starting
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
