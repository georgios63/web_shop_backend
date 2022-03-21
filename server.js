const express = require("express");
const cors = require("cors");
const app = express();
const productsRouter = require("./routers/products");
const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("Home page");
});

app.use("/products", productsRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
