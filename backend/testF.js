// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://test-f:<password>@test-f.2lqmbpf.mongodb.net/?retryWrites=true&w=majority";

// router.post('/register', async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         const db = client.db("test");
//         const users = db.collection("users");

//         users.insertOne({
//             username: username,
//             password: hashedPassword
//         }, (error, result) => {
//             client.close();
//             if (error) {
//                 res.status(500).json({ error: error });
//             } else {
//                 res.json({ result: result });
//             }
//         });
//     });
// });

// module.exports = router;




// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');
// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;
// const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/test?retryWrites=true&w=majority";

// router.post('/login', async (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     const client = new MongoClient(uri, { useNewUrlParser: true });
//     client.connect(err => {
//         const db = client.db("test");
//         const users = db.collection("users");

//         users.findOne({ username: username }, (error, result) => {
//             client.close();
//             if (error) {
//                 res.status(500).json({ error: error });
//             } else if (!result) {
//                 res.status(404).json({ error: "User not found" });
//             } else {
//                 bcrypt.compare(password, result.password, (error, same) => {
//                     if (error) {
//                         res.status(500).json({ error: error });
//                     } else if (same) {
//                         res.json({ message: "Login successful" });
//                     } else {
//                         res.status(401).json({ error: "Incorrect password" });
//                     }
//                 });
//             }
//         });
//     });
// });

// module.exports = router;




const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// const mongoose = require("mongoose")
const dotenv = require("dotenv")
const bcrypt = require('bcrypt');


dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())


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
const PORT = process.env.PORT
const DB = process.env.DB.replace("<password>", process.env.PASSWORD)
mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("CONNECTED");
        app.listen(PORT, () => {
            console.log(`PORT:${PORT}`);
        })
    }
})


app.get("/users", (req, res) => {
    User.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
})


app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    User.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(400).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
})

app.post('/register', async (req, res) => {
    try {
        const { email, password, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2, city, state, zip_code } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email, password: hashedPassword, confirm_password: hashedPassword, confirm_password, first_name, last_name, company_name, phone_num, address_line1, address_line2,
            city, state, zip_code
        });

        await user.save();

        res.send('User created successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});


// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

        // const hashedPassword = await bcrypt.hash(password, 10);

//         user.findOne({ username: username }, (error, result) => {
//             client.close();
//             if (error) {
//                 res.status(500).json({ error: error });
//             } else if (!result) {
//                 res.status(404).json({ error: "User not found" });
//             } else {
//                 bcrypt.compare(password, result.password, (error, same) => {
//                     if (error) {
//                         res.status(500).json({ error: error });
//                     } else if (same) {
//                         res.json({ message: "Login successful" });
//                     } else {
//                         res.status(401).json({ error: "Incorrect password" });
//                     }
//                 });
//             }
//         });
//         res.send('User created successfully');
//     } catch (err) {
//         res.status(400).send(err.message);
//     }
// });


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        // const email = "7qzjlm4@code.edu.az";
        // const password = "uzeyir.12345";
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('Email is incorrect');
        console.log(user);
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) return res.status(400).send(' password is incorrect');

        res.send('Login successful');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    User.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})

