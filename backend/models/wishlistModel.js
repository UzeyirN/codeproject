const mongoose = require("mongoose")

const wishlistSchema = new mongoose.Schema(
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
        productId: {
            type: String,
            // required: true,
        },
    },
    { timestamps: true },
)

const Wishlist = mongoose.model("wishlist", wishlistSchema)
module.exports = (Wishlist)