const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("user", {
    userId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
  });

  User.associate = (models) => {};

  return User;
};
