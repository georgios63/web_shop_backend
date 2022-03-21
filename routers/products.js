const { Router } = require("express");
const Products = require("../models").product;

const router = new Router();

router.get("/", (req, res, next) => {
  res.send("This is products page");
});

router.get("/:id", (req, res, next) => {
  res.send("This is products based on Id");
});

module.exports = router;
