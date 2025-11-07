const Product = require("../models/Product");
const Products = require('../Product.json');


const getAllProducts = async (req, res) => {
  const products = await Product.find();
  console.log(products)
  res.json({ message: products });
};

const createProduct = async (req, res) => {

  const product = await Product.create(Products);
  res.json({ message: 'prodcuts are stored in Db' });
};

module.exports = {
  getAllProducts,
  createProduct
};
