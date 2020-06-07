const jwt = require("jsonwebtoken");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const middlewares = require("../middlewares/auth");

module.exports = (sequelize, db) => {
  const { AUTH_SECRET, SALT_ROUNDS } = process.env;
  const { User } = db;
  router.post("/api/verify-token", middlewares.verifyToken, (req, res) => {
    res.json({
      message: "API is up and running.",
      status: 200,
      request_user: req.user,
    });
  });

  router.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    // compare password
    if (!user) {
      res.json({ status: 402, message: "User doesn't exist." });
    } else {
      const match = bcrypt.compareSync(password, user.password);
      if (match) {
        const { userId, email, password } = user;
        const tokenUser = {
          userId,
          email,
        };
        const token = jwt.sign({ tokenUser }, AUTH_SECRET);
        res.json({ status: 200, token, user: tokenUser });
      } else {
        res.json({ status: 402, message: "Invalid credentials." });
      }
    }
  });

  router.post("/api/register", async (req, res) => {
    const { email, password, name } = req.body;
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.json({ status: 402, message: "User already exist." });
    } else {
      const salt = bcrypt.genSaltSync(parseInt(SALT_ROUNDS));
      const hash = bcrypt.hashSync(password, salt);
      const newUser = await User.create({
        email,
        password: hash,
        name,
      });
      if (!newUser)
        res.json({
          status: 500,
          message: "Cannot create new user. Internal server error.",
        });
      else {
        const { userId, email } = newUser;
        res.json({ status: 200, user: { userId, email } });
      }
    }
  });

  return router;
};
