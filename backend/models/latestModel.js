const mongoose = require("mongoose")

// const { Schema } = mongoose;
const latestSchema = new mongoose.Schema(
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
            type: Number,
            // required: [true, "Please enter price!"]
        },
        kind: {
            type: String,
            // required: [true, "Please enter kind!"]
        },
    },
    { timestamps: true },
)


const Latest = mongoose.model("latest", latestSchema)
module.exports = (Latest)