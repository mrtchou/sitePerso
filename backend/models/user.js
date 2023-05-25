const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Chemin vers votre fichier sequelize.js

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Ajoutez d'autres champs selon vos besoins
});

module.exports = User;
