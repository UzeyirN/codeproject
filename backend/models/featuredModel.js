const mongoose = require("mongoose")

const { Schema } = mongoose;
const featuredSchema = new Schema(
    {
        image: {
            type: String,
            // required: [true, "Please enter image!"]
        },
        brand: {
            type: String,
            // required: [true, "Please enter brand!"]
        },
        alcohol: {
            type: String,
            // required: [true, "Please enter alcohol!"]
        },
        appelation: {
            type: String,
            // required: [true, "Please enter appelation!"]
        },
        size: {
            type: String,
            // required: [true, "Please enter size!"]
        },
        price: {
            type: String,
            // required: [true, "Please enter price!"]
        },
        kind: {
            type: String,
            // required: [true, "Please enter kind!"]
        },
    },
    { timestamps: true },
)

const Featured = mongoose.model("featured", featuredSchema)
module.exports = (Featured)