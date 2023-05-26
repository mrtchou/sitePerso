const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const bcrypt = require("bcryptjs");

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
    set(value) {
      const hash = bcrypt.hashSync(value, 10); // Hash le mot de passe avec un salt de 10 rounds
      this.setDataValue("password", hash);
    },
  },
});

module.exports = User;
