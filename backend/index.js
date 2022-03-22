const express = require('express');
const questionsRoutes = require('./routes/questions.routes.js')
const userRoutes = require('./routes/user.routes.js')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/error.js')
const port = process.env.PORT || 8000

connectDB()

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

/*app.use("/questions/unanswered", unanswered)
app.use("/questions/rejected", rejected)
app.use("/questions/answered", answered)*/
app.use('/api/questions', questionsRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

/*app.use("*", (req, res) => res.status(404).json({
    error: "not found"
}))*/

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
