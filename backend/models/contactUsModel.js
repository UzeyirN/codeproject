const mongoose = require("mongoose")

const { Schema } = mongoose;
const contactUsSchema = new Schema(
    {

        fullname: {
            type: String,
        },
        phone_num: {
            type: String,
        },
        email: {
            type: String,
        },
        order_num: {
            type: String,
        },
        company_name: {
            type: String,
        },
        rma_num: {
            type: String,
        },
        comments: {
            type: String,
        }

    },
    { timestamps: true },

)

const ContactUs = mongoose.model("contactus", contactUsSchema)
module.exports = (ContactUs)