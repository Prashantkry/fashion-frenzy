const express = require("express");
const ProductRouter = express.Router();

const { addNewProduct, getAllProducts } = require("../controller/ProductsController");

ProductRouter.post("/", addNewProduct);
ProductRouter.get("/", getAllProducts);


module.exports = ProductRouter;
