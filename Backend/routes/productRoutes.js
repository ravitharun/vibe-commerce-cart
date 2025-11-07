const express = require("express");
const { getAllProducts, createProduct } = require("../controllers/Productcontrollers");
const StoreUsers = require("../controllers/Usercontroller");

const router = express.Router();

router.get("/new", getAllProducts);
router.post("/add", createProduct);
router.post("/addUsers", StoreUsers);

module.exports = router;

