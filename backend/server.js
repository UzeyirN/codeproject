const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config();
const app = express();
app.use(cors())
app.use(bodyParser.json())
const { Schema } = mongoose;
const customerSchema = new Schema(
    {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        specialty: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)
mongoose.set("strictQuery", false)
const Customers = mongoose.model("customers", customerSchema)
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


app.get("/customers", (req, res) => {
    Customers.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get("/customers/:id", (req, res) => {
    const { id } = req.params;
    Customers.findById(id, (err, docs) => {
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


app.post("/customers", async (req, res) => {
    const customers = req.body
    try {
        await Customers.create(customers)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete("/customers/:id", (req, res) => {
    const { id } = req.params;
    Customers.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})




