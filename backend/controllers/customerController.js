const Customer = require('../models/customerModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const customer_register = async (req, res) => {
    try {
        const { email, password, confirmPassword, firstname, lastname, company_name, phone_num, address_line1, address_line2, sburb_city, state, zip } = req.body;
        const existingCustomer = await Customer.findOne({ email });

        if (existingCustomer) {
            return res.status(400).json({ message: 'Customer already exists' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const customer = await Customer.create({ email, password: hashedPassword, firstname, lastname, company_name, phone_num, address_line1, address_line2, sburb_city, state, zip });
        // const token = jwt.sign({ email: customer.email, id: customer._id }, 'mysecret', { expiresIn: '1h' });

        const token = jwt.sign({ email: customer.email, id: customer._id }, 'customer123', { expiresIn: '1h' });
        res.status(201).json({ result: customer, token });

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const customer_login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingCustomer = await Customer.findOne({ email });

        if (!existingCustomer) {
            return res.redirect('/customerlogin/createaccount');
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingCustomer.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        existingCustomer.isLoggedIn = true;
        await existingCustomer.save();

        // const token = jwt.sign({ email: existingCustomer.email, id: existingCustomer._id }, 'mysecret', { expiresIn: '1h' });
        // return res.status(200).json({ name: existingCustomer.name, email: existingCustomer.email, token });

        const token = jwt.sign({ email: existingCustomer.email, id: existingCustomer._id }, 'customer123', { expiresIn: '1h' });
        return res.status(200).json({ name: existingCustomer.name, email: existingCustomer.email, token });

    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

// const customer_tokenRequired = (req, res, next) => {
//     const { token } = req.body;

//     console.log("token", token)
//     if (!token) {
//         return res.status(401).json({ message: 'Authentication failed' });
//     }
//     try {
//         console.log("try")
//         const decodedData = jwt.verify(token, 'mysecret');
//         console.log("after dekot")
//         req.user = decodedData;
//         console.log("after req customer")

//         return res.status(200).json({ result: decodedData, token });

//     } catch (error) {
//         return res.status(401).json({ message: 'Authentication failed' });
//     }
// };

const customer_tokenRequired = (req, res, next) => {
    const { token } = req.body;
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    try {
        const decodedData = jwt.verify(token, 'customer123');
        req.user = decodedData;
        return res.status(200).json({ result: decodedData, token });
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

const customer_logout = async (req, res) => {
    try {
        const customer = await Customer.findById(req.customer._id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        customer.isLoggedIn = false;
        await customer.save();
        res.clearCookie('token');
        res.redirect('/customerlogin');
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const existingCustomer = await Customer.findOne({ email });

        if (!existingCustomer) {
            return res.status(404).json({ message: 'Customer does not exist' });
        }

        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const getLoggedInUsers = async (req, res) => {
    try {
        const loggedInCustomer = await Customer.find({ isLoggedIn: true });
        res.status(200).json(loggedInCustomer);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { customer_register, customer_login, forgotPassword, getLoggedInUsers, customer_tokenRequired, customer_logout };
