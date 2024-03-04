const express = require("express");
const { signInValidate } = require("../controller/SignInController");

const signIn = express();

signIn.post("/", signInValidate);

module.exports = signIn;
