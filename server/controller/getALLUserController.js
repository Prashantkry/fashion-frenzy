const UserSchema = require("../model/UserSchema");

const getAllUser = async (req, res) => {
  const data = await UserSchema.find({ Role: false });
  // console.log(data);
  res.json(data);
};

module.exports = { getAllUser };
