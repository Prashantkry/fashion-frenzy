const mongoose = require("mongoose");
const SignInSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Role: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("signIn", SignInSchema);
