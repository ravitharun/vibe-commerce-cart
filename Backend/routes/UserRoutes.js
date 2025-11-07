const express = require("express");
const router = express.Router();

const StoreUsers = require("../controllers/Usercontroller");

router.get("/addUsers", StoreUsers);

module.exports = router;
