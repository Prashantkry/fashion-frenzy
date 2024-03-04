const UserSchema = require("../model/UserSchema");

const getAdmin = async (req, res) => {
  const { userId } = req.body;
  try {
    // console.log(userId);
    const data = await UserSchema.findOne({ UserId: userId });
    // console.log(data);
    if (data) {
      res.status(200).json({ message: "Admin Data", data });
    } else {
      res.status(404).json({ error: "Admin data not found" });
    }
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAdmin };
