import nodemailer from "nodemailer";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter using your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      host: "your-email-host",
      port: 465,
      auth: {
        user: "your-email",
        pass: "your-password",
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: {name},
        to: "vjatia449@gmail.com",
        subject: "New message from your portfolio contact form",
        html: `
          <h2>New Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error sending email");
    }
  } else {
    res.status(404).send("Not Found");
  }
};
