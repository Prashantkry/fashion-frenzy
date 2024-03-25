const express = require("express");
const { checkoutPost } = require("../controller/cartController");
const { checkOutGet } = require("../controller/cartController");
const { removeProductFromCart } = require("../controller/cartController");
const checkoutRouter = express.Router();

checkoutRouter.post("/", checkoutPost);
checkoutRouter.get("/", checkOutGet);
checkoutRouter.delete("/", removeProductFromCart);

module.exports = checkoutRouter;
