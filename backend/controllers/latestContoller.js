const Latest = require('../models/latestModel')

exports.latest_getAll = (req, res) => {
    Latest.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

exports.latest_getAll_byId = (req, res) => {
    const { id } = req.params;
    Latest.findById(id, (err, docs) => {
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

exports.latest_post = async (req, res) => {
    const latest = req.body
    try {
        await Latest.create(latest)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
}


// exports.featured_post = (req, res) => {
//     let featured = new Featured({
//         image: req.body.image,
//         brand: req.body.brand,
//         alcohol: req.body.alcohol,
//         appelation: req.body.appelation,
//         size: req.body.size,
//         price: req.body.price,
//         kind: req.body.kind,
//     })

//     featured.save()
//     res.send("success")
// }



exports.latest_delete = (req, res) => {
    const { id } = req.params;
    Latest.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

