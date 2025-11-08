const CheckoutSchema = require("../models/Chekout");
const { nanoid } = require("nanoid");

// POST Checkout
const Checkout = async (req, res) => {
    try {
        const { checkoutFormData, CartItems } = req.body;

        console.log({ checkoutFormData, CartItems });

        const orderId = nanoid(); // unique ID

        // Create new checkout document
        const newOrder = new CheckoutSchema({
            orderId,
            userinfo: {
                name: checkoutFormData.name,
                email: checkoutFormData.email,
                phone: checkoutFormData.phone,
                address: checkoutFormData.address,
            },
            checkoutProducts: CartItems.map((item) => ({
                productId: item.productId,
                name: item.name,
                qty: item.qty,
                total: item.total,
            })),
        });

        await newOrder.save();

        return res.json({
            message: "Order Confirmed",
            orderId: orderId,
            orderDetails: newOrder,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = Checkout;
