const express = require("express");
const {Cart,RemoveProductCart,UpdateCart,GetCartItems} = require("../controllers/cartcontroller");


const router = express.Router();

router.post("/Addcart", Cart);
router.get("/", GetCartItems);
router.delete("/:id", RemoveProductCart);
router.put("/", UpdateCart);



module.exports = router;

