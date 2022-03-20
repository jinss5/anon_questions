const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../model/user.model')

// @desc   Register new user
// @route  POST /api/users
// @access Public
const registerUser = asyncHandler( async (req, res) => {
    const { name, password } = req.body

    //check all field is entered
    if(!name || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({name})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({ name, password: hashedPassword })
    if (user) {
        res.status(201).json({ _id: user.id, name: user.name})
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }
})

// @desc   Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    res.json({message: 'Ligin user'})
})

// @desc   Get user data
// @route  GET /api/users/me
// @access Public
const getMe = asyncHandler( async (req, res) => {
    res.json({message: 'get user data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}