const express = require('express');
const questionsRoutes = require('./routes/questions.routes.js')
const dotenv = require('dotenv')

const app = express();
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

/*app.use("/questions/unanswered", unanswered)
app.use("/questions/rejected", rejected)
app.use("/questions/answered", answered)*/
app.use("/api/questions", questionsRoutes)

/*app.use("*", (req, res) => res.status(404).json({
    error: "not found"
}))*/

const port = process.env.PORT || 8000



//connect mongodb
const MongoClient = require('mongodb').MongoClient

const url = process.env.QUESTIONS_DB_URI

MongoClient.connect( url )
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`)
        })
    })
