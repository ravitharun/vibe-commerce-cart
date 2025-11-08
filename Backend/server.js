const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const UserRoutes = require("./routes/UserRoutes");
const CartRoutes = require("./routes/CartRoutes");
const CheckoutRoute = require("./routes/Checkout");

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/cart", CartRoutes);
app.use("/api/carcheckout", CheckoutRoute);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error", err));

app.get("/", (req, res) => {
  res.send("Server Running ✅");
});

app.listen(5000, () => {
  console.log("✅ Server Started on port 5000");
});
