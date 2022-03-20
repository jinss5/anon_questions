const mongoose = require('mongoose')

const url = process.env.QUESTIONS_DB_URI

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(url)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB