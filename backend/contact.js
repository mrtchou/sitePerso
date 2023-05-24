app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    // configurer ici avec vos propres informations
  });

  const mailOptions = {
    from: email,
    to: "votre-email@domaine.com",
    subject: `Nouveau message de ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send({ success: false });
    } else {
      res.send({ success: true });
    }
  });
});
