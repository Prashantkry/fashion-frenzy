const mongoose = require("mongoose");

const SignUpSchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true,
  },
  Name: {
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
  Phone: {
    type: Number,
    required: true,
  },
  Token: {
    type: String,
    required: true,
  },
  Role: {
    type: Boolean,
    required: true,
  },
  Pic: {
    type: String,
  },
});

module.exports = mongoose.model("SignUp", SignUpSchema);
