const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const userRoute = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// Routes
app.use("/api/users", userRoute);

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
