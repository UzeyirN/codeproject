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