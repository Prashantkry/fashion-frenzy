const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
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
  isAdmin: {
    type: Boolean,
    default: false,
  },
  Address: {
    type: String,
    required: true,
  },
  PinCode: {
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

// UserSchema.virtual("id").get(function () {
//   return this._id.toHexString();
// });

// UserSchema.set("toJSON", {
//   virtuals: true,
// });

module.exports = mongoose.model("Users", UserSchema);
// module.exports = UserSchema;
