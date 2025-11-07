// user route function will be written
const UserSchema = require("../models/user");
// /api/users/addUsers
const users = require('../user.json');
const StoreUsers = async (req, res) => {
    try {
        console.log('StoreUsers api is running the api')
        await UserSchema.create(users)
        res.json({ message: users })
    }
    catch (err) {
        console.log(err.message)
    }
}
module.exports = StoreUsers