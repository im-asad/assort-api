const Sequelize = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const {
  DB_NAME,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  NODE_ENV,
  CLEARDB_DATABASE_URL,
} = process.env;

let sequelize;
if (NODE_ENV === "production") {
  sequelize = new Sequelize(CLEARDB_DATABASE_URL);
} else {
  sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "mysql",
    operatorsAliases: false,
  });
}

const db = {
  Bin: sequelize.import("./models/Bin"),
  User: sequelize.import("./models/User"),
  Area: sequelize.import("./models/Area"),
};

Object.keys(db).forEach((model) => {
  if ("associate" in db[model]) {
    db[model].associate(db);
  }
});

module.exports = { db, sequelize };
