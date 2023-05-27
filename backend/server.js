const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const authRoutes = require("./routes/auth");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// Configuration de la session
app.use(
  session({ secret: "secret key", resave: false, saveUninitialized: false })
);

app.use(passport.initialize());
app.use(passport.session());

// Configuration explicite de CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: "*", // autoriser toutes les origines
    methods: "*", // autoriser toutes les méthodes
    allowedHeaders: "*", // autoriser tous les headers
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Gestion de la route /contact en tant que point d'entrée pour les requêtes POST
app.post("/contact", (req, res) => {
  res.send(req.body); // Renvoie la requête du corps du message
  res.status(200).send(req.body); // Renvoie une réponse avec le corps du message et le code de statut 200
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
