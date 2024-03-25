const express = require("express");

const { sendMail } = require("../controller/sendMail");

const sendMails = express();

sendMails.post("/", sendMail);

module.exports = sendMails;
