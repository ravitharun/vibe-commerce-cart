const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
  orderId: { type: String, required: true },

  userinfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },

  checkoutProducts: [
    {
      productId: { type: String, required: true },
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("checkout", CheckoutSchema);
