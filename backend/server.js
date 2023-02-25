const express = require('express')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")




//!import routes
const featuredRoute = require("./routes/featuredRoute")
const latestRoute = require('./routes/latestRoute')
const beConnectedRoute = require('./routes/beConnectedRoute')
const contactUsRoute = require("./routes/contactUsRoute")
const wishlistRoute = require("./routes/wishlistRoute")

// const adminRoute = require("./routes/adminRoute")
const authRoutes = require('./routes/authRoute');




dotenv.config();
app.use(bodyParser.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))

//!use routes
app.use('/featured', featuredRoute)
app.use('/latest', latestRoute)
app.use('/beconnected', beConnectedRoute)
app.use('/contactus', contactUsRoute)
app.use('/wishlist', wishlistRoute)

app.use('/', authRoutes)









const PORT = process.env.PORT
const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
mongoose.set("strictQuery", false)


mongoose.connect(DB, {})
    .then(() => {
        console.log("Connected database");
    })
    .catch(() => {
        console.log("Not connected database");
    })


app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})

