const Featured = require('../models/featuredModel')

exports.featured_getAll = (req, res) => {
    Featured.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

exports.featured_getAll_byId = (req, res) => {
    const { id } = req.params;
    Featured.findById(id, (err, docs) => {
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

exports.featured_post = async (req, res) => {
    const featured = req.body
    try {
        await Featured.create(featured)
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





exports.featured_delete = (req, res) => {
    const { id } = req.params;
    Featured.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

