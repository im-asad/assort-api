const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Bin = sequelize.define("bin", {
    binId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    plasticFillLevel: {
      type: Sequelize.FLOAT,
    },
    metalFillLevel: {
      type: Sequelize.FLOAT,
    },
    paperFillLevel: {
      type: Sequelize.FLOAT,
    },
    cardboardFillLevel: {
      type: Sequelize.FLOAT,
    },
    glassFillLevel: {
      type: Sequelize.FLOAT,
    },
    overallFillLevel: {
      type: Sequelize.FLOAT,
    },
    location: {
      type: Sequelize.STRING,
    },
    longitude: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.STRING,
    },
  });

  Bin.associate = (models) => {
    Bin.belongsTo(models.Area, { foreignKey: "areaId" });
  };

  return Bin;
};
