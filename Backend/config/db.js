const mongoose = require("mongoose");
console.log(process.env.MONGO_URI,'process.env.MONGO_URI')
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log("❌ DB Error", err);
  }
};

module.exports = connectDB;
