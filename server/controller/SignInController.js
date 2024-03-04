const SignInSchema = require("../model/SignInSchema");

// const newSign
const signInValidate = async (req, res) => {
  const { Email, Password } = req.body;
  const loginData = await SignInSchema.findOne({
    Email,
  });
  if (loginData) {
    const pass = await SignInSchema.findOne({
      Password,
    });
    if (pass && pass.Password === Password) {
      const UserId = loginData.UserId;
      res.status(200).json({ message: "LoginS", UserId });
    } else {
      res.status(400).json({ message: "passW" });
    }
  } else {
    res.status(400).json({ message: "noAccnt" });
  }
};

module.exports = { signInValidate };
