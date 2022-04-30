const asyncHandler = require('express-async-handler')
const Question = require('../model/questions.model.js')
const User = require('../model/user.model.js')

// @desc Get Context
// @route GET /api/questions
// @access Public
const getContext = asyncHandler( async (req, res) => {
    const question = await Question.find({user: req.user})
    res.status(200).json(question)
})

// @desc Set Context
// @route POST /api/questions
// @access Public
const setContext = asyncHandler( async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    const question = await Question.create({
        text: req.body.text,
        type: "unanswered",
        user: req.user.id
    })

    res.status(200).json(question)
})


// @desc Update Context
// @route PUT /api/questions/:id
// @access Private
const updateContext = asyncHandler( async (req, res) => {
    const question = await Question.findById(req.params.id)

    if(!question) {
        res.status(400)
        throw new Error('question not found')
    }

    //only user created can update
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    if(question.user.toString !== req.user.id) {
        res.status(401)
        throw new Error('user not authorized')
    }

    const updatedQuestion = await Question.findByIdAndUpdate(
        req.params.id, req.body, {new: true} )

    res.status(200).json(updatedQuestion)
})

// @desc delete Context
// @route DELETE /api/questions/:id
// @access Private
const deleteContext = asyncHandler( async (req, res) => {
    const question = await Question.findById(req.params.id)

    if(!question) {
        res.status(400)
        throw new Error('question not found')
    }

    //only user created can delete
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }
    if(question.user.toString !== req.user.id) {
        res.status(401)
        throw new Error('user not authorized')
    }

    await question.remove()

    res.status(200).json({ id: req.params.id })
})

// @desc Get Type
// @route Get /api/questions/type/:id
// @access Public
const getType = asyncHandler( async (req, res) => {
    const type = await Question.findById(req.params.id).select("type")
    res.status(200).json(type)
})

// @desc Update Type
// @route Put /api/questions/type/:id
// @access Private
/*const updateType = asyncHandler( async (req, res) => {
    const question = await Question.findById(req.params.id)
    const type = await Question.findById(req.params.id).selcet("type")
    
    if(!question) {
        res.status(400)
        throw new Error('question not found')
    }
    if(!type) {
        res.status(400)
        throw new Error('type not found')
    }

    const updatedType = await Question.findByIdAndUpdate(
        req.params.id, req.body, {new: true} )

    res.status(200).json(updatedType)
})*/

module.exports = {
    getContext,
    setContext,
    updateContext,
    deleteContext,
    getType,
    //updateType
}