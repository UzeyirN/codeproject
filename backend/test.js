// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv")

// dotenv.config();
// const app = express();
// app.use(cors())
// app.use(bodyParser.json())


// const { Schema } = mongoose;
// const latestSchema = new Schema(
//     {
//         image: {
//             type: String,
//             required: true
//         },
//         brand: {
//             type: String,
//             required: true
//         },
//         alcohol: {
//             type: Number,
//             required: true
//         },
//         appelation: {
//             type: String,
//             required: true
//         },
//         size: {
//             type: Number,
//             required: true
//         },
//         price: {
//             type: Number,
//             required: true
//         },
//         kind: {
//             type: String,
//             required: true
//         },
//     },
//     { timestamps: true },
// )
// mongoose.set("strictQuery", false)
// const Latest = mongoose.model("latest", latestSchema)
// const PORT = process.env.PORT
// const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
// mongoose.connect(DB, (err) => {
//     console.log(err);
//     if (!err) {
//         console.log("CONNECTED");
//         app.listen(PORT, () => {
//             console.log(`PORT:${PORT}`);
//         })
//     }
// })


// app.get("/latest", (req, res) => {
//     Latest.find({}, (err, docs) => {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.status(500).json({ message: err })
//         }
//     })
// })

// app.get("/latest/:id", (req, res) => {
//     const { id } = req.params;
//     Latest.findById(id, (err, docs) => {
//         if (!err) {
//             if (docs) {
//                 res.send(docs)
//                 res.status(200)
//             } else {
//                 res.status(400).json({ message: "Not Found" })
//             }
//         } else {
//             res.status(500).json(
//                 { message: err }
//             )
//         }
//     })
// })

// app.post("/latest", async (req, res) => {
//     const latest = req.body
//     try {
//         await Latest.create(latest)
//         res.status(200).json({
//             message: "success"
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

// app.delete("/latest/:id", (req, res) => {
//     const { id } = req.params;
//     Latest.findByIdAndDelete(id, (err) => {
//         if (!err) {
//             res.send("SUCCESSFULY DELETE")
//         } else {
//             res.status(500).json({
//                 message: err
//             })
//         }
//     })
// })




// const express = require("express")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv")
// const bcrypt = require('bcrypt');


// dotenv.config();
// const app = express();
// app.use(cors())
// app.use(bodyParser.json())


// const { Schema } = mongoose;
// const UserSchema = new Schema({
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     confirm_password: {
//         type: String,
//         required: true
//     },
//     first_name: {
//         type: String,
//         required: true
//     },
//     last_name: {
//         type: String,
//         required: true
//     },
//     company_name: {
//         type: String,
//         required: true
//     },
//     phone_num: {
//         type: Number,
//         required: true
//     },
//     address_line1: {
//         type: String,
//         required: true
//     },
//     address_line2: {
//         type: String,
//         required: true
//     },
//     city: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: String,
//         required: true
//     },
//     zip_code: {
//         type: Number,
//         required: true
//     },
// },

//     { timestamps: true }
// )
// mongoose.set("strictQuery", false)
// const User = mongoose.model("users", UserSchema)
// const PORT = process.env.PORT
// const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
// mongoose.connect(DB, (err) => {
//     console.log(err);
//     if (!err) {
//         console.log("CONNECTED");
//         app.listen(PORT, () => {
//             console.log(`PORT:${PORT}`);
//         })
//     }
// })


// app.get("/users", (req, res) => {
//     User.find({}, (err, docs) => {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.status(500).json({ message: err })
//         }
//     })
// })




// app.get("/users/:id", (req, res) => {
//     const { id } = req.params;
//     User.findById(id, (err, docs) => {
//         if (!err) {
//             if (docs) {
//                 res.send(docs)
//                 res.status(200)
//             } else {
//                 res.status(400).json({ message: "Not Found" })
//             }
//         } else {
//             res.status(500).json(
//                 { message: err }
//             )
//         }
//     })
// })

// app.post('/users', async (req, res) => {
//     try {
//         const { email, password, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2, city, state, zip_code } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({
//             email, password: hashedPassword, confirm_password: hashedPassword, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2,
//             city, state, zip_code
//         });

//         await user.save();

//         res.send('User created successfully');
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });


// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({
//             email, password: hashedPassword, confirm_password: hashedPassword, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2,
//             city, state, zip_code
//         });

//         await user.save();

//         res.send('User created successfully');
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });

// app.delete("/users/:id", (req, res) => {
//     const { id } = req.params;
//     User.findByIdAndDelete(id, (err) => {
//         if (!err) {
//             res.send("SUCCESSFULY DELETE")
//         } else {
//             res.status(500).json({
//                 message: err
//             })
//         }
//     })
// })










// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({

//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     confirm_password: {
//         type: String,
//         required: true
//     },
//     first_name: {
//         type: String,
//         required: true
//     },
//     latest_name: {
//         type: String,
//         required: true
//     },
//     company_name: {
//         type: String,
//         required: true
//     },
//     phone_num: {
//         type: Number,
//         required: true
//     },
//     address_line1: {
//         type: String,
//         required: true
//     },
//     address_line2: {
//         type: String,
//         required: true
//     },
//     city: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: String,
//         required: true
//     },
//     zip_code: {
//         type: String,
//         required: true
//     },
// },
// { timestamps: true }
// );

// const User = mongoose.model('User', UserSchema);

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());



// app.get("/register", (req, res) => {
//     User.find({}, (err, docs) => {
//         if (!err) {
//             res.send(docs)
//         } else {
//             res.status(500).json({ message: err })
//         }
//     })
// })

// app.get("/register/:id", (req, res) => {
//     const { id } = req.params;
//     User.findById(id, (err, docs) => {
//         if (!err) {
//             if (docs) {
//                 res.send(docs)
//                 res.status(200)
//             } else {
//                 res.status(400).json({ message: "Not Found" })
//             }
//         } else {
//             res.status(500).json(
//                 { message: err }
//             )
//         }
//     })
// })


// app.post('/register', async (req, res) => {
//     try {
//         const {email, password,confirm_password,first_name,latest_name,company_name,phone_num,address_line1,address_line2,city,state,zip_code } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({ email, password: hashedPassword,confirm_password,first_name,latest_name,company_name,phone_num,address_line1,address_line2,
//         city,state,zip_code });

//         await user.save();

//         res.send('User created successfully');
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });


// app.listen(3090, () => {
//     console.log('Server running on http://localhost:3090');
// });






// //! FERID




// const express = require('express');
// const app = express();
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// const User = mongoose.model('User', UserSchema);

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post('/register', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const user = new User({ name, email, password: hashedPassword });

//         await user.save();

//         res.send('User created successfully');
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });







// // const express = require('express');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// // const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new LocalStrategy(
//     function (username, password, done) {
//         User.findOne({ username: username }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect username.' });
//             }
//             if (!user.validPassword(password)) {
//                 return done(null, false, { message: 'Incorrect password.' });
//             }
//             return done(null, user);
//         });
//     }
// ));

// passport.serializeUser(function (user, done) {
//     done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//     User.findById(id, function (err, user) {
//         done(err, user);
//     });
// });

// app.post('/login',
//     passport.authenticate('local', {
//         successRedirect: '/',
//         failureRedirect: '/login',
//         failureFlash: true
//     })
// );

// app.listen(3000, () => {
//     console.log('Server running on http://localhost:3000');
// });














