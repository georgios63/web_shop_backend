const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const User = require("../models").user;
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .send("Authentication error!Please provide the missing fields");

    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });
    if (!existingUser) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      existingUser.password
    );
    if (!validPassword)
      return res.status(400).send("Invalid email or password");

    res.send(true);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
