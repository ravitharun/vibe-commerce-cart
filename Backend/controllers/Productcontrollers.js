const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  // const products = await Product.find();
  res.json({message:"go ti "});
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

module.exports = {
  getAllProducts,
  createProduct
};
