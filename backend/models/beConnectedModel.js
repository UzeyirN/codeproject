const mongoose = require("mongoose")

const { Schema } = mongoose;
const beConnectedSchema = new Schema(
    {
        email: {
            type: String,
            // required: [true, "Please enter email!"]
        }
    },
    { timestamps: true },

)

const BeConnected = mongoose.model("beConnected", beConnectedSchema)
module.exports = (BeConnected)