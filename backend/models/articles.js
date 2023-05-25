const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Chemin vers votre fichier sequelize.js

const Article = sequelize.define("Article", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  // Ajoutez d'autres champs selon vos besoins
});

module.exports = Article;
