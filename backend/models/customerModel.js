const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    company_name: { type: String },
    phone_num: { type: Number, required: true },
    address_line1: { type: String, required: true },
    address_line2: { type: String },
    sburb_city: { type: String, required: true },
    state: { type: String },
    zip: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
