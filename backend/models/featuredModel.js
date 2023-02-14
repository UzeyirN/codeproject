const mongoose = require("mongoose")

// const { Schema } = mongoose;
const featuredSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            // required: true
        },
        brand: {
            type: String,
            // required: true
        },
        // alcohol: {
        //     type: Number,
        //     required: true
        // },
        appelation: {
            type: String,
            // required: true
        },
        // size: {
        //     type: Number,
        //     required: true
        // },
        price: {
            type: Number,
            // required: true
        },
        // kind: {
        //     type: String,
        //     required: true
        // },
    },
    { timestamps: true },
)

const Featured = mongoose.model("featured", featuredSchema)
module.exports = (Featured)