const mongoose = require("mongoose")

// const { Schema } = mongoose;
const latestSchema = new mongoose.Schema(
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


const Latest = mongoose.model("latest", latestSchema)
module.exports = (Latest)