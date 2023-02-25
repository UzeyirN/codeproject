const mongoose = require("mongoose")

const { Schema } = mongoose;
const featuredSchema = new Schema(
    {
        image: {
            type: String,
        },
        brand: {
            type: String,
        },
        alcohol: {
            type: String,
        },
        appelation: {
            type: String,
        },
        size: {
            type: String,
        },
        price: {
            type: Number,
        },
        kind: {
            type: String,
        },
    },
    { timestamps: true },
)

const Featured = mongoose.model("featured", featuredSchema)
module.exports = (Featured)