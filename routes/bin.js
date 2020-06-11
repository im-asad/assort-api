const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const middlewares = require("../middlewares/auth");

module.exports = (sequelize, db) => {
  const { Bin, Area } = db;
  router.get("/api/bins", async (req, res) => {
    const { areaId, fillLevel } = req.query;
    let bins = (
      await Bin.findAll({
        where: { areaId },
        include: { model: Area },
      })
    ).filter((bin) => {
      return parseFloat(bin.overallFillLevel) > parseFloat(fillLevel);
    });

    res.json({ message: "Bins retrieved.", bins });
  });

  return router;
};
