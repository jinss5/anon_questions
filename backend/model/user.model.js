const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'please add a username'],
        
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'please add a password']
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)