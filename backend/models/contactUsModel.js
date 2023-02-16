const mongoose = require("mongoose")

const { Schema } = mongoose;
const contactUsSchema = new Schema(
    {

        fullname: {
            type: String,
            // required: [true, "Please enter email!"]
        },
        phone_num: {
            type: String,
            // required: [true, "Please enter email!"]
        },
        email: {
            type: String,
            // required: [true, "Please enter email!"]
        },
        order_num: {
            type: String,
            // required: [true, "Please enter email!"]
        },
        company_name: {
            type: String,
            // required: [true, "Please enter email!"]
        },
        rma_num: {
            type: String,
            // required: [true, "Please enter email!"]
        },
        comments: {
            type: String,
            // required: [true, "Please enter email!"]
        }

    },
    { timestamps: true },

)

const ContactUs = mongoose.model("contactus", contactUsSchema)
module.exports = (ContactUs)