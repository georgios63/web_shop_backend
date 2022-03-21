const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const fetchUsers = await User.findAll();

    res.send(fetchUsers);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password || !name)
      return res
        .status(400)
        .send("Authentication error!Please provide the missing fields");

    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (existingUser) return res.status(400).send("User already registered");

    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, 10),
      name,
    });

    res.send(newUser);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
