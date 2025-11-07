const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema({
 userinfo:{
    name:{type:String},
    email:{type:String,required:true},
    phone:{type:Number,required:true}
 },
 checkoutProducts:{
    id:{type:String,required:true},
    name:{type:String,required:true},
    qty:{type:Number,required:true},
    price:{type:Number,required:true},

 }

}, { timestamps: true });

module.exports = mongoose.model("Checkout", CheckoutSchema);
