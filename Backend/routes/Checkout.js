const express = require("express");
const Checkout = require('../controllers/Checkoutcontroller');

const router = express.Router();
router.post("/", Checkout)
module.exports = router;