const express = require("express");
const router = express.Router();

const StoreUsers = require("../controllers/Usercontroller");

router.post("/addUsers", StoreUsers);

module.exports = router;
