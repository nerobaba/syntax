const smtp = {
  host: "localhost",
  port: 1025,
};

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: smtp.host,
  port: smtp.port,
});

const mailOptions = {
  from: "sender@example.com",
  to: "recipient@example.com",
  subject: "Test email",
  html: "<p>This is a test email sent using MailHog</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
