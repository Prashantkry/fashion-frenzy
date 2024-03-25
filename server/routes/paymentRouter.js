const express = require("express");
const {payment} = require("../controller/paymentController");
const RouterPayment = express.Router();

RouterPayment.post("/", payment);

module.exports = RouterPayment;
