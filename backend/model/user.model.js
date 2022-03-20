const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)