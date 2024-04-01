const ProductModel = require("../model/ProductsSchema");

// adding new product to database
const addNewProduct = async (req, res) => {
  const {
    // productId,
    productName,
    ProductDescriptions,
    productPrice,
    ProductCategory,
    imageDatas,
    imageDatas1,
    imageDatas2,
  } = req.body;

  console.log(imageDatas,imageDatas1,imageDatas2)

  const productCount = await ProductModel.countDocuments();

  const newProduct = new ProductModel({
    ProductId: parseInt(productCount + 1),
    ProductName: productName,
    ProductDescriptions: ProductDescriptions,
    ProductPrice: parseInt(productPrice),
    ProductCategory: ProductCategory,
    ProductImage: imageDatas,
    ProductImage1: imageDatas1,
    ProductImage2: imageDatas2,
  });

  const newData = await ProductModel.create(newProduct);
  await newData.save();
  console.log("New product added");

  res
    .status(201)
    .json({ message: "Product added successfully", data: newProduct });
};

// get All products
const getAllProducts = async (req, res) => {
  const allProducts = await ProductModel.find();
  res.status(201).json({ message: "product available", allProducts });
};
module.exports = { addNewProduct, getAllProducts };
