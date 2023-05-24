const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Configuration explicite de CORS
app.use(
  cors({
    origin: "*", // autoriser toutes les origines
    methods: "*", // autoriser toutes les méthodes
    allowedHeaders: "*", // autoriser tous les headers
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/contact", (req, res) => {
  res.send(req.body);
  res.status(200).send(req.body);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
