const bcrypt = require("../utils/bcrypt");

module.exports = async (db) => {
  const { User, Area, Bin } = db;
  const users = [
    {
      email: "asad.awan.se@gmail.com",
      password: bcrypt.hashPassword("1234"),
      name: "Asad Awan",
    },
  ];

  const areas = [
    {
      areaId: 1,
      area: "Bahria Town",
    },
    {
      areaId: 2,
      area: "F-11",
    },
  ];

  const bins = [
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.497720",
      latitude: "73.108082",
      areaId: 1,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.494526",
      latitude: "73.105087",
      areaId: 1,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.493011",
      latitude: "73.097771",
      areaId: 1,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.490923",
      latitude: "73.094088",
      areaId: 1,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.490227",
      latitude: "73.088736",
      areaId: 1,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.489858",
      latitude: "73.073613",
      areaId: 1,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.494923",
      latitude: "73.077642",
      areaId: 1,
    },

    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.688983",
      latitude: "72.982272",
      areaId: 2,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.686627",
      latitude: "72.984032",
      areaId: 2,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.686555",
      latitude: "72.987079",
      areaId: 2,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.684913",
      latitude: "72.989182",
      areaId: 2,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.682484",
      latitude: "72.995962",
      areaId: 2,
    },
    {
      plasticFillLevel: 70.3,
      metalFillLevel: 12.0,
      paperFillLevel: 30.3,
      cardboardFillLevel: 91.2,
      glassFillLevel: 87.7,
      overallFillLevel: 65.0,
      longitude: "33.679735",
      latitude: "72.983560",
      areaId: 2,
    },
  ];

  await User.bulkCreate(users);
  await Area.bulkCreate(areas);
  await Bin.bulkCreate(bins);
};
