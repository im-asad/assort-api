const bcrypt = require("../utils/bcrypt");

module.exports = async (db) => {
  const { User } = db;
  const users = [
    {
      email: "asad.awan.se@gmail.com",
      password: bcrypt.hashPassword("1234"),
      name: "Asad Awan",
    },
  ];

  await User.bulkCreate(users);
};
