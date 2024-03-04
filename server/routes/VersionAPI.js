const express = require("express");
const productRouting = require("./ProductsRouting");
const SignUpRouter = require("./SignUpRoutes");
const SignInRouter = require("./SignInRoutes");

const getAdmin = require("./getAdminRoutes");
const getAllUser = require("./getALLUserRoutes");

const versionApi = express.Router();

versionApi.use("/product", productRouting);

versionApi.use("/SignUp", SignUpRouter);
versionApi.use("/SignIn", SignInRouter);

versionApi.use("/getAdmin", getAdmin);
versionApi.use("/getAllUser", getAllUser);

module.exports = versionApi;
