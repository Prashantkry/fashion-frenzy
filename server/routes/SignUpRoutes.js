const express = require("express");
const { SignUp } = require("../controller/SignUpController");
const SignUpRouter = express();

SignUpRouter.post("/", SignUp);

module.exports = SignUpRouter;
