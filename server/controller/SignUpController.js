const jwt = require("jsonwebtoken");
const SignUpSchema = require("../model/SignUpSchema");
const SignInSchema = require("../model/SignInSchema");
const Users = require("../model/UserSchema");
const CryptoJS = require("crypto-js");

const SignUp = async (req, res) => {
  const { Phone, Password, Email, Name, Address, Pin, image } = req.body;
  console.log(Phone, Password, Email, Name, Address, Pin, image);

  const imageData = image;

  try {
    const EmailSignedUp = await SignUpSchema.findOne({ Email });
    if (EmailSignedUp) {
      return res.status(400).json({
        message: "UserAlready",
      });
    }

    const userId = generateUserId();
    console.log(userId);
    const token = generateToken(userId, Name, Email, Phone);
    console.log(token);

    const newSignUp = new SignUpSchema({
      UserId: userId,
      Name,
      Email,
      Password,
      Phone,
      Token: token,
      Role: false,
      Pic: imageData,
    });
    console.log(newSignUp);
    await newSignUp.save();

    const newSignIn = new SignInSchema({
      UserId: userId,
      Email,
      Password,
      Role: false,
    });
    await newSignIn.save();

    const newUser = new Users({
      UserId: userId,
      Name,
      Email,
      Password,
      Phone,
      isAdmin: false,
      Address: Address,
      PinCode: Pin,
      Role: false,
      Pic: imageData,
    });
    await newUser.save();

    res.status(201).json({
      message: "SignupDataSaved",
      data: newSignUp,
    });
  } catch (err) {
    res.err;
  }
};

// Function to generate a unique userId
function generateUserId() {
  // Generate a unique identifier using any method you prefer
  // Here, we use crypto-js to generate a random string
  const randomString = CryptoJS.lib.WordArray.random(32).toString();
  return randomString;
}

// Function to generate JWT token
function generateToken(userId, Name, Email, Phone) {
  // Generate a JWT token
  const token = jwt.sign(
    { userId, Name, Email, Phone },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
  return token;
}

module.exports = { SignUp };

// const SignUpSchema = require("../model/SignUpSchema");
// const SignInSchema = require("../model/SignInSchema");

// const SignUp = async (req, res) => {
//   const { Phone, Password, Email, Name } = req.body;

//   // console.log(Phone, Password, Email, Name);
//   try {
//     const EmailSignedUp = await SignUpSchema.findOne({ Email });
//     if (EmailSignedUp) {
//       return res.status(400).json({
//         message: "UserAlready",
//       });
//     }
//     const newSignUp = new SignUpSchema({
//       Name,
//       Email,
//       Password,
//       Phone,
//     });
//     await newSignUp.save();

//     const newSignIn = new SignInSchema({
//       Email,
//       Password,
//     });
//     await newSignIn.save();

//     res.status(201).json({
//       message: "SignupDataSaved",
//       data: newSignUp,
//     });
//   } catch (err) {
//     res.err;
//   }
// };

// module.exports = { SignUp };
