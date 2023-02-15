const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")


dotenv.config();
const app = express()


const featuredRoute = require("./routes/featuredRoute")
const latestRoute = require('./routes/latestRoute')

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