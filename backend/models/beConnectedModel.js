const mongoose = require("mongoose")

const { Schema } = mongoose;
const beConnectedSchema = new Schema(
    {
        email: {
            type: String,
        }
    },
    { timestamps: true },

)

const BeConnected = mongoose.model("beConnected", beConnectedSchema)
module.exports = (BeConnected)