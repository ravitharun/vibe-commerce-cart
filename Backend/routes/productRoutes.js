const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/Productcontrollers");


const router = express.Router();

router.get("/new", getAllProducts);
router.post("/add", createProduct);


module.exports = router;

