const mongoose = require("mongoose")


const { Schema } = mongoose;
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    phone_num: {
        type: Number,
        required: true
    },
    address_line1: {
        type: String,
        required: true
    },
    address_line2: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip_code: {
        type: Number,
        required: true
    },
},

    { timestamps: true }
)
mongoose.set("strictQuery", false)
const User = mongoose.model("users", UserSchema)


export default User;