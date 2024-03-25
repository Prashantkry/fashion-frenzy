const nodemailer = require("nodemailer");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const sendMail = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  // console.log(name, email, subject, message);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_Password,
    },
  });

  const mailOptions = {
    from: {
      name: name,
      address: process.env.USER,
    },
    to: [email],
    subject: subject,
    text: message,
  };

  try {
    const mailSentData = await transporter.sendMail(mailOptions);
    const URl = process.env.MONGO_URL;
    const client = new MongoClient(URl);
    await client.connect();
    const db = client.db("FashionFrenzyData");
    const collection = db.collection("ContactData");
    const insertData = await collection.insertOne({ mailOptions });
    console.log("email sent");
  } catch (error) {
    console.log(error);
  }
  res.json({ message: "Email Sent" });
};
// sendMail(transporter, mailOptions); // when  using normal node js file
module.exports = { sendMail };
