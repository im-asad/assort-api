const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const middlewares = require("../middlewares/auth");

const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = (sequelize, db) => {
  const { Bin, Area } = db;
  router.get("/api/bins", async (req, res) => {
    const { areaId, fillLevel } = req.query;
    console.log("FILL LEVEL: ", fillLevel);
    let bins = (
      await Bin.findAll({
        where: { areaId },
        include: { model: Area },
      })
    ).filter((bin) => {
      console.log("HELLO: ", bin);
      return parseFloat(bin.overallFillLevel) > parseFloat(fillLevel);
    });

    res.json({ message: "Bins retrieved.", bins });
  });

  return router;
};
