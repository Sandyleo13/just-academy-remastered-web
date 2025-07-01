const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1313',
  database: 'justacademy_ios'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected');
});

app.post('/api/enroll', (req, res) => {
  const { name, email, phone, message } = req.body;
  const sql = 'INSERT INTO enrollments (name, email, phone, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ success: true });
  });
});

app.post('/api/contact', (req, res) => {
  const { name, phone, email, subject, message } = req.body;
  console.log("Received contact form:", req.body); // Add this line
  const sql = 'INSERT INTO contact_messages (name, phone, email, subject, message) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [name, phone, email, subject, message], (err, result) => {
    if (err) {
      console.error("MySQL error:", err); // Add this line
      return res.status(500).send(err);
    }
    res.send({ success: true });
  });
});

app.post('/api/query', (req, res) => {
  const { name, email, phone, course, location, experience, query: userQuery } = req.body;
  const sql = 'INSERT INTO queries (name, email, phone, course, location, experience, query) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, course, location, experience, userQuery], (err, result) => {
    if (err) {
      console.error("MySQL error:", err);
      return res.status(500).send(err);
    }

    // Send email after successful DB insert
    // Configure your SMTP details here
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your SMTP provider
      auth: {
        user: 'sandipandas0816@gmail.com',
        pass: '0816@Safer20'
      }
    });

    const mailOptions = {
      from: 'sandipandas0816@gmail.com',
      to: 'info@justacademy.co',
      subject: 'New Query Received from JustAcademy Website',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Course: ${course}
        Location: ${location}
        Experience: ${experience}
        Query: ${userQuery}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email error:", error);
        return res.status(500).send({ success: false, error: "Query saved, but email failed." });
      }
      console.log("Email sent:", info.response); // Add this line
      res.send({ success: true });
    });
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));