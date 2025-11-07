
const mongoose = require("mongoose");



const CartSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    userEmail: { type: String, required: true, unique: true },
    cartItems: [
        {
            productId: Number,
            name: String,
            qty: Number
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("cart", CartSchema);
