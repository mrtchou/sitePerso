const Sequelize = require("sequelize");
const sequelize = require("./sequelize"); // Chemin vers le fichier sequelize.js

// Définir un modèle pour la table "utilisateur"
const Utilisateur = sequelize.define("utilisateur", {
  nom: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // Ajoutez d'autres colonnes selon vos besoins
});

module.exports = Utilisateur;
