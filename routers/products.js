const { Router } = require("express");
const Products = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const fetchProducts = await Products.findAll();
    if (!fetchProducts)
      return res.status(404).send("Server error products not found");

    res.send(fetchProducts);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const fetchProductById = await Products.findByPk(req.params.id);
    if (!fetchProductById)
      return res.status(400).send("Please provide a valid id");

    res.send(fetchProductById);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

// router.get("/:id/:price", async (req, res, next) => {
//   try {
//     const fetchProductByPrice = await Products.findByPk(req.params.price);
//     if (!fetchProductByPrice)
//       return res.status(400).send("Products with that price doesn't exist");

//     res.send(fetchProductByPrice);
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });

module.exports = router;
