const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  currency: { type: String, default: "USD" },
  category: { type: String },
  brand: { type: String },
  inStock: { type: Boolean, default: true },
  stockQuantity: { type: Number, default: 0 },
  specifications: {
    color: { type: String },
    weight: { type: String },
    batteryLife: { type: String },
    connectivity: { type: String }
  },
  tags: { type: [String], default: [] }
}, { timestamps: true });

module.exports = mongoose.model("Checkout", CheckoutSchema);
