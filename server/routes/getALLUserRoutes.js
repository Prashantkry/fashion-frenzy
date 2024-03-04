const express = require("express");
const { getAllUser } = require("../controller/getALLUserController");
const getAllUserRouter = express.Router();

getAllUserRouter.post("/", getAllUser);

module.exports = getAllUserRouter;
