const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const User = require("./models/user");
const authRoutes = require("./routes/auth");
const PORT = process.env.PORT || 5000;

// Utilisation de bodyParser pour analyser le corps des requêtes au format JSON
app.use(express.json());

// Route de base pour afficher "Hello World!"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Utilisation des routes d'authentification définies dans authRoutes
app.use("/auth", authRoutes);

// Écoute du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

// Configuration de la session
app.use(
  session({ secret: "secret key", resave: false, saveUninitialized: false })
);

// Initialisation de Passport pour l'authentification
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

// Utilisation de bodyParser pour analyser le corps des requêtes au format JSON
app.use(bodyParser.json());

// Utilisation de bodyParser pour analyser les données du corps des requêtes avec des URL encodées
app.use(bodyParser.urlencoded({ extended: true }));

// Gestion de la route /contact en tant que point d'entrée pour les requêtes POST
app.post("/contact", (req, res) => {
  res.send(req.body); // Renvoie la requête du corps du message
  res.status(200).send(req.body); // Renvoie une réponse avec le corps du message et le code de statut 200
});

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const newUser = await User.create(req.body);
  res.json(newUser);
});

// Écoute du serveur sur le port spécifié (PORT) avec une fonction de rappel pour afficher un message
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
