const asyncHandler = require('express-async-handler')

// @desc Get Context
// @route GET /api/questions
// @access Public
const getContext = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Get context'})
})

// @desc Set Context
// @route POST /api/questions
// @access Public
const setContext = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({ message: 'Set context'})
})


// @desc Update Context
// @route PUT /api/questions/:id
// @access Private
const updateContext = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Update context ${req.params.id}`})
})

// @desc delete Context
// @route DELETE /api/questions/:id
// @access Private
const deleteContext = asyncHandler( async (req, res) => {
    res.status(200).json({ message: `Delete context ${req.params.id}`})
})

module.exports = {
    getContext,
    setContext,
    updateContext,
    deleteContext
}