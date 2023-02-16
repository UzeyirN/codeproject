// const BeConnected=require("../models/beConnectedModel")

const ContactUs=require("../models/contactUsModel")

exports.contactUS_getAll = (req, res) => {
    ContactUs.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

exports.contactUS_getAll_byId = (req, res) => {
    const { id } = req.params;
    ContactUs.findById(id, (err, docs) => {
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
}

exports.contactUS_post = async (req, res) => {
    const contactUS = req.body
    try {
        await ContactUs.create(contactUS)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
}

exports.contactUS_delete = (req, res) => {
    const { id } = req.params;
    ContactUs.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

