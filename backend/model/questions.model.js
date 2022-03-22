const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: [true, 'please add a text value']
    }
}, 
{
    timestamps: true
})
//add status and update status only?

module.exports = mongoose.model('Question', questionSchema)