// here the cart function written here.
const CartSchema = require('../models/Cart');
const UserSchema = require('../models/user');
const productSchema = require('../models/Product');
//  get the cart of productBased on the (UserEmail) method-->(post)
const Cart = async (req, res) => {
  try {
    const { id, Getemail, total } = req.body;
    console.log({ id, Getemail })

    // Find user
    const getUserinfo = await UserSchema.findOne({ email: Getemail });
    if (!getUserinfo) return res.status(404).json({ message: "User not found" });

    // Find product
    const Getproduct = await productSchema.findById(id);
    if (!Getproduct) return res.status(404).json({ message: "Product not found" });

    const Defaultqty = 2;

    // Find user's cart
    let userCart = await CartSchema.findOne({ userId: getUserinfo._id });

    if (userCart) {
      // Check if product already exists in cart
      const existingItem = userCart.cartItems.find(
        (item) => item.productId.toString() === id
      );

      if (existingItem) {
        // Product exists, increment quantity
        existingItem.qty += Defaultqty;
      } else {
        // Product doesn't exist, add new
        userCart.cartItems.push({
          productId: Getproduct._id,
          name: Getproduct.name,
          qty: Defaultqty,
          total: Defaultqty * total
        });
      }

      await userCart.save();
      return res.status(200).json({ message: "Cart updated successfully", cart: userCart });
    } else {
      // Create new cart for user
      const newCart = await CartSchema.create({
        userId: getUserinfo._id,
        userEmail: getUserinfo.email,
        cartItems: [
          {
            productId: Getproduct._id,
            name: Getproduct.name,
            qty: Defaultqty,
            total: Defaultqty * total
          },
        ],
      });

      return res.status(200).json({ message: "Cart created and product added", cart: newCart });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err.message });
  }
};




// get the cart ItemProduct based on the Ref--->(usereEmail)

const GetCartItems = async (req, res) => {
  try {
    const { Getemail } = req.query;

    if (!Getemail) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Find cart for this user
    const userCart = await CartSchema.findOne({ userEmail: Getemail });

    if (!userCart || userCart.cartItems.length === 0) {
      return res.status(404).json({ message: "No cart items found" });
    }

    // Return cart items
    return res.status(200).json({ message: userCart.cartItems });
  } catch (err) {
    console.log(err.message)
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { GetCartItems };





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
module.exports = { Cart, GetCartItems, RemoveProductCart, UpdateCart }