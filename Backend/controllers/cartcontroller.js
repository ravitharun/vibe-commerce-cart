// here the cart function written here.
const CartSchema = require('../models/Cart');
//  get the cart of productBased on the (UserEmail) method-->(post)
const Cart = async (req, res) => {
    try {
        const { id, email } = req.body;
        console.log( { id, email });
        const Addtocart = await CartSchema.create();
        console.log(Addtocart)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
// rmv the product from cart ref-->productId method-->(delete)
const RemoveProductCart = async (req, res) => {
    try {
        const { id, email } = req.params
        console.log( { id, email })
        const Addtocart = await CartSchema.create()
        console.log(Addtocart)
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
// update the cart item ref-->email and (productid) method-->(put)
const UpdateCart = async (req, res) => {
    try {
        const { id, email } = req.params
        console.log( { id, email })
        const Addtocart = await CartSchema.findById({id})
        console.log(Addtocart)

    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
module.exports={Cart,RemoveProductCart,UpdateCart}