const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Bin = sequelize.define("bin", {
    binId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  Bin.associate = (models) => {};

  return Bin;
};
