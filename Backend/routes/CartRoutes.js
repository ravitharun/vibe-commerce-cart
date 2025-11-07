const express = require("express");
const {Cart,RemoveProductCart,UpdateCart} = require("../controllers/cartcontroller");


const router = express.Router();

router.post("/Addcart", Cart);
router.post("/", Cart);
router.delete("/:id", RemoveProductCart);
router.put("/", UpdateCart);



module.exports = router;

