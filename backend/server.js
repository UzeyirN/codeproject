const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const app = express()

const cors = require("cors")
app.use(cors())

// const bodyParser = require(bodyParser)


//!
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))


dotenv.config();


const featuredRoute = require("./routes/featuredRoute")
const latestRoute = require('./routes/latestRoute')


const bodyParser = require('body-parser')
app.use(bodyParser.json())


app.use('/featured', featuredRoute)
app.use('/latest', latestRoute)


const PORT = process.env.PORT
const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
mongoose.set("strictQuery", false)


mongoose.connect(DB)
    .then(() => {
        console.log("Connected database");
    })
    .catch(() => {
        console.log("Not connected database");
    })




app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})