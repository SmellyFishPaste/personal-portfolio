const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

// CORS Configuration — allows your GitHub Pages frontend
app.use(cors({
  origin: "https://smellyfishpaste.github.io",
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Nodemailer error:", error);
  } else {
    console.log("Ready to send email");
  }
});

// POST endpoint
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  const mail = {
    from: email,
    to: "shadowhawk851@gmail.com",
    subject: "Contact Form Submission",
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Send error:", error);
      res.status(500).json({ code: 500, message: "Failed to send message." });
    } else {
      res.status(200).json({ code: 200, message: "Message sent successfully" });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
