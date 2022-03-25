const { Router } = require("express");
const Categories = require("../models").category;
const Products = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const fetchCategories = await Categories.findAll();
    if (!fetchCategories)
      res.status(404).send("Server error products not found");

    res.send(fetchCategories);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const filteredProducts = await Products.findAll({
      include: [{ model: Categories, where: { id: categoryId }, right: true }],
    });

    if (filteredProducts.length < 1)
      return res.status(400).send("There are no products found");

    res.send(filteredProducts);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;
