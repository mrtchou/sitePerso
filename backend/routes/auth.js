const express = require("express");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create({ username, password: hashedPassword })
    .then((user) => {
      req.login(user, (err) => {
        if (err) {
          return next(err);
        }
        res.status(201).json(user);
      });
    })
    .catch(next);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.delete("/logout", (req, res) => {
  req.logout();
  res.status(200).end();
});

module.exports = router;
