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

    // check password length
    if (password.length < 6) {
        res.status(400)
        throw new Error ('Password less than 6 characters')
      }

    // Hash password
    const saltRounds = 10 // data processing speed
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({ name, password: hashedPassword })
    if (user) {
        res.status(201).json({ 
            _id: user.id, 
            name: user.name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User data')
    }
})

// @desc   Authenticate a user
// @route  POST /api/users/login
// @access Public
const loginUser = asyncHandler( async (req, res) => {
    const {name, password} = req.body

    //check for user name
    const user = await User.findOne({name})
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ 
            _id: user.id, 
            name: user.name,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }

    res.json({message: 'Login user'})
})

// @desc   Get user data
// @route  GET /api/users/me
// @access Private
const getMe = asyncHandler( async (req, res) => {
    // const { _id, name } = await User.findById(req.user.id)
    // res.status(200).json({ id: _id, name })
    res.status(200).json(req.user)
})

// generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}