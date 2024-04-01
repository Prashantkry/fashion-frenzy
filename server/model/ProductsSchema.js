const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  ProductId: {
    type: Number,
    required: true,
  },
  ProductName: {
    type: String,
    required: true,
  },
  ProductDescriptions: {
    type: String,
    required: true,
  },
  ProductPrice: {
    type: Number,
    required: true,
  },
  ProductCategory: {
    type: String,
    required: true,
  },
  ProductImage: {
    type: String,
    // required: true,
  },
  ProductImage1: {
    type: String,
  },
  ProductImage2: {
    type: String,
  },
});

module.exports = mongoose.model("Products", productSchema);
