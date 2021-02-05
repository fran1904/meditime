const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    googleId: String,
    userName: String,
    firstName: String,
    email: String,
    url_picture: String
})

const User = mongoose.model('user', UserSchema)

module.exports = User