module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER,
  });

  User.associate = (models) => {
    User.hasMany(models.Article, {
      foreignKey: "userId",
      as: "articles",
    });
  };

  return User;
};
