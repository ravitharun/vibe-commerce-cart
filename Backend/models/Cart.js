const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
         unique: false, 
        required: true
        
    },
    userEmail: {
        type: String,
        required: true
    },
    cartItems: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products",
                required: true
            },
            name: String,
            qty: Number,
            total:Number
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("carts", CartSchema);
