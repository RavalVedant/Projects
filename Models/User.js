const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "visitor"
    }
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel