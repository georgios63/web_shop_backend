const { Router } = require("express");
const Products = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const fetchProducts = await Products.findAll();
    if (!fetchProducts) res.status(404).send("Server error products not found");

    res.send(fetchProducts);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const fetchProductById = await Products.findByPk(req.params.id);
    if (!fetchProductById) res.status(400).send("Please provide a valid id");

    res.send(fetchProductById);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
