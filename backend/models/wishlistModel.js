const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema(
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
        productId: {
            type: String,
            // required: true,
        },
    },
    { timestamps: true },
)

const Wishlist = mongoose.model("wishlist", wishlistSchema)
module.exports = (Wishlist)