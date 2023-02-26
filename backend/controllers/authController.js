// const User = require('../models/userModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');


// const register = async (req, res) => {
//     try {
//         const { username, email, password, confirmPassword } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         if (password !== confirmPassword) {
//             return res.status(400).json({ message: "Passwords don't match" });
//         }

//         const hashedPassword = await bcrypt.hash(password, 12);

//         const user = await User.create({ username, email, password: hashedPassword });

//         const token = jwt.sign({ email: user.email, id: user._id }, 'mysecret', { expiresIn: '1h' });

//         res.status(201).json({ result: user, token });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (!existingUser) {
//             return res.redirect('/register');
//         }

//         const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

//         if (!isPasswordCorrect) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         existingUser.isLoggedIn = true; // Set the isLoggedIn property to true

//         await existingUser.save(); // Save the user to the database

//         const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'mysecret', { expiresIn: '1h' });

//         res.status(200).json({ result: existingUser, token });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };




// const forgotPassword = async (req, res) => {
//     try {
//         const { email } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (!existingUser) {
//             return res.status(404).json({ message: 'User does not exist' });
//         }

//         // TODO: implement forgot password functionality (e.g. send password reset email)
//         res.status(200).json({ message: 'Password reset email sent' });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


// const getLoggedInUsers = async (req, res) => {
//     try {
//         const loggedInUsers = await User.find({ isLoggedIn: true });
//         res.status(200).json(loggedInUsers);
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };

// module.exports = { register, login, forgotPassword, getLoggedInUsers };




const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const register = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const hashedPassword = await bcrypt.hash(password, 12);

//         const user = await User.create({ username, email, password: hashedPassword });

//         const token = jwt.sign({ email: user.email, id: user._id }, 'mysecret', { expiresIn: '1h' });

//         res.status(201).json({ result: user, token });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };

const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({ username, email, password: hashedPassword });

        const token = jwt.sign({ email: user.email, id: user._id }, 'mysecret', { expiresIn: '1h' });

        res.status(201).json({ result: user, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (!existingUser) {
//             return res.status(404).json({ message: 'User does not exist' });
//         }

//         const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

//         if (!isPasswordCorrect) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'mysecret', { expiresIn: '1h' });

//         res.status(200).json({ result: existingUser, token });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (!existingUser) {
//             return res.redirect('/register');
//         }

//         const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

//         if (!isPasswordCorrect) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         existingUser.isLoggedIn = true; // Set the isLoggedIn property to true

//         await existingUser.save(); // Save the user to the database

//         const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'mysecret', { expiresIn: '1h' });

//         res.status(200).json({ result: existingUser, token });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong' });
//     }
// };


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log(email)
        console.log(password)

        const existingUser = await User.findOne({ email });



        if (!existingUser) {
            return res.redirect('/register');
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        existingUser.isLoggedIn = true; // Set the isLoggedIn property to true

        await existingUser.save(); // Save the user to the database

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'mysecret', { expiresIn: '1h' });



        return res.status(200).json({ result: existingUser, token });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};


const tokenRequired = (req, res, next) => {
    const { token } = req.body;

    console.log("token", token)
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    try {
        console.log("try")

        const decodedData = jwt.verify(token, 'mysecret');
        console.log("after dekot")

        req.user = decodedData;
        console.log("after req user")

        return res.status(200).json({ result: decodedData, token });


    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};


const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(404).json({ message: 'User does not exist' });
        }

        // TODO: implement forgot password functionality (e.g. send password reset email)
        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};


const getLoggedInUsers = async (req, res) => {
    try {
        const loggedInUsers = await User.find({ isLoggedIn: true });
        res.status(200).json(loggedInUsers);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { register, login, forgotPassword, getLoggedInUsers, tokenRequired };
