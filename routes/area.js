const router = require("express").Router();

module.exports = (sequelize, db) => {
  const { Area } = db;
  router.get("/api/areas", async (req, res) => {
    let areas = await Area.findAll();

    res.json({ message: "Areas retrieved.", areas });
  });

  return router;
};
