const { MongoClient } = require("mongodb");
require("dotenv").config();
const URl = process.env.MONGO_URL;
const client = new MongoClient(URl);

const checkoutPost = async (req, res) => {
  console.log("api triggered");
  const data = req.body.productProperties;
  const UserId = req.body.UserId;
  // console.log(UserId);

  await client.connect();
  const db = client.db("FashionFrenzyData");
  const collection = db.collection("Checkout");

  const alreadyInCart = await collection.findOne({ _id: UserId });
  // console.log(alreadyInCart);
  if (alreadyInCart) {
    // update to mongodb
    const updatedCart = await collection.updateOne(
      { _id: UserId },
      { $push: { data: { $each: data } } }
    );
    // console.log(updatedCart);
    res.json({ message: "Data Updated" });
  } else {
    // insert to mongo db
    const insertData = await collection.insertOne({
      _id: UserId,
      data,
    });
    // console.log(insertData);
    res.json({ message: "Data Inserted" });
  }
};

const removeProductFromCart = async (req, res) => {
  console.log("triggered");
  const UserId = req.body.UserId;
  const productIdToRemove = req.body.productId;
  console.log(productIdToRemove);
  await client.connect();
  const db = client.db("FashionFrenzyData");
  const collection = db.collection("Checkout");

  const alreadyInCart = await collection.findOne({ _id: UserId });
  // console.log(alreadyInCart);

  if (alreadyInCart) {
    const updatedData = alreadyInCart.data.filter(
      (product) => product.ProductId !== productIdToRemove
    );
    // console.log(updatedData);

    try {
      const updatedCart = await collection.updateOne(
        { _id: UserId },
        { $set: { data: updatedData } }
      );
      // console.log(updatedCart);
      res.json({ message: "Product removed from cart" });
    } catch (error) {
      console.log(error);
      res.json({ message: "error in removing cart item" });
    }
  } else {
    // User's cart not found
    res.status(404).json({ message: "User's cart not found" });
  }
};

const checkOutGet = async (req, res) => {
  const UserId = req.headers.userid;
  await client.connect();
  const db = client.db("FashionFrenzyData");
  const collection = db.collection("Checkout");
  const checkoutData = await collection.findOne({ _id: UserId });
  res.json({ checkoutData });
};

module.exports = { checkoutPost, checkOutGet, removeProductFromCart };
