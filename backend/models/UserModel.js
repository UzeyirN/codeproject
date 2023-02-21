const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const user_schema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    confirm_password: {
        type: String,
        required: [true, "Please Enter Your Confrim password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    firstname: {
        type: String,
        required: [true, "Please Enter Your First Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more than 4 characters"],
    },
    lastname: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more than 4 characters"],
    },
    companyname: {
        type: String
    },
    phone_num: {
        type: Number,
        required: [true, "Please Enter Your Phone number"],
    },
    address_line1: {
        type: String,
        required: [true, "Please Enter Your Address line"],
    },
    address_line2: {
        type: String,
    },
    sburb_city: {
        type: String,
        required: [true, "Please Enter Your Sburb / City"],
    },
    state: {
        type: String,
        
    },
    zip_postcode: {
        type: String,
        required: [true, "Please Enter Your Zip / Post Code"],
    },
    role: {
        type: String,
        default: "user",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
});


user_schema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})



user_schema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

user_schema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

user_schema.methods.getResetPasswordToken = function () {

    const resetToken = crypto.randomBytes(20).toString('hex');

    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

    return resetToken

}

module.exports = mongoose.model("User", user_schema);

