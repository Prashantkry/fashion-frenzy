const express = require("express");
const productRouting = require("./ProductsRouting");
const SignUpRouter = require("./SignUpRoutes");
const SignInRouter = require("./SignInRoutes");

const getAdmin = require("./getAdminRoutes");
const getAllUser = require("./getALLUserRoutes");

const sendMails = require("./sendMail");

const checkoutRouter = require("./checkoutRoutes");

const RouterPayment = require("./paymentRouter");

const versionApi = express.Router();

versionApi.use("/product", productRouting);

versionApi.use("/SignUp", SignUpRouter);
versionApi.use("/SignIn", SignInRouter);

versionApi.use("/getAdmin", getAdmin);
versionApi.use("/getAllUser", getAllUser);

versionApi.use("/sendMail", sendMails);

versionApi.use("/checkout", checkoutRouter);

versionApi.use("/create-checkout-session", RouterPayment);

module.exports = versionApi;
