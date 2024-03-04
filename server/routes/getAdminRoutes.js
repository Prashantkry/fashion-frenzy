const express = require("express");

const { getAdmin } = require("../controller/getAdminController");

const AdminRouter = express.Router();

AdminRouter.post("/", getAdmin);

module.exports = AdminRouter;
