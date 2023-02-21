const node_mailer = require("nodemailer");

const send_email = async (options) => {
  const transporter = node_mailer.createTransport({
    host:process.env.SMPT_HOST,
    port:process.env.SMPT_PORT,

    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${process.env.SMPT_FROM_NAME} <${process.env.SMPT_FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = send_email;