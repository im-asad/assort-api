const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const server = express();

const { sequelize, db } = require("./db/connect");

sequelize.sync({ force: true }).then(() => {
  console.log("THIS IS THE DB: ", db);
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());

  const authRoutes = require("./routes/auth")(sequelize, db);
  server.use(authRoutes);

  server.listen(8080, () => {
    console.log("SERVER LISTENING");
  });
});
