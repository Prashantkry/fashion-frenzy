const mongoose = require("mongoose");

const userSchemaGoogle = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
});
module.exports = mongoose.model("UserGoogle", userSchemaGoogle);
