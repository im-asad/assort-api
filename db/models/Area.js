const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Area = sequelize.define("area", {
    areaId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    area: {
      type: Sequelize.STRING,
      unique: true,
    },
    destinationLatitude: {
      type: Sequelize.STRING,
    },
    destinationLongitude: {
      type: Sequelize.STRING,
    },
  });

  Area.associate = (models) => {};

  return Area;
};
