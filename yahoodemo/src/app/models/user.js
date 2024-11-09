const mongoose = require('mongoose')


const requiredStr = {
    type: String,
    required: true
}

const userSchema = new mongoose.Schema({
    username: requiredStr,
    password: requiredStr,
}, {
    timestamps: false,
    versionKey: false
})

const User = mongoose.model('User', userSchema);

module.exports = User;