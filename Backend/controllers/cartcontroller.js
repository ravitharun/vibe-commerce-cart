// here the cart function written here.
const CartSchema = require('../models/Cart');
const UserSchema = require('../models/user');
const productSchema = require('../models/Product');
//  get the cart of productBased on the (UserEmail) method-->(post)
const Cart = async (req, res) => {
  try {
    const { id, Getemail } = req.body;

    const getUserinfo = await UserSchema.findOne({ email: Getemail });
    const Getproduct = await productSchema.findById(id); // simpler

    if (!getUserinfo || !Getproduct) {
      return res.status(404).json({ message: "User or product not found" });
    }

    const Addtocart = await CartSchema.create({
      userId: getUserinfo._id,
      userEmail: getUserinfo.email,
      cartItems: [
        {
          productId: Getproduct._id,
          name: Getproduct.name,
          qty: 2
        }
      ]
    });

    return res.status(200).json({ message: "Added into the cart" });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};



// rmv the product from cart ref-->productId method-->(delete)
const RemoveProductCart = async (req, res) => {
    try {
        const { id, email } = req.params
        console.log({ id, email })
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
        console.log({ id, email })
        const Addtocart = await CartSchema.findById({ id })
        console.log(Addtocart)

    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
module.exports = { Cart, RemoveProductCart, UpdateCart }