
const mongoose = require("mongoose");
const Product = require("./Product");


const CartSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  userEmail:{type:String,required:true,unique:true},
  Products:{type:Product,required:true}
}, { timestamps: true });

module.exports = mongoose.model("cart", CartSchema);
