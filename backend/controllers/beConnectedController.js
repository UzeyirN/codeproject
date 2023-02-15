const BeConnected=require("../models/beConnectedModel")

exports.beConnected_getAll = (req, res) => {
    BeConnected.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

exports.beConnected_getAll_byId = (req, res) => {
    const { id } = req.params;
    BeConnected.findById(id, (err, docs) => {
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

exports.beConnected_post = async (req, res) => {
    const beConnected = req.body
    try {
        await BeConnected.create(beConnected)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
}

exports.beConnected_delete = (req, res) => {
    const { id } = req.params;
    BeConnected.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

