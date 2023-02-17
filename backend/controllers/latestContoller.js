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


exports.latest_update = async (req, res) => {
    try {
        const example = await Latest.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Latest not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



// exports.latest_update = (req, res) => {
//     const { id } = req.params;

//     Latest.findByIdAndUpdate(id, req.body, (err, doc) => {
//         if (!err) {
//             res.status(201);
//         } else {
//             res.status(500).json(err);
//         }
//     });
//     res.send({ message: "SUCCESSFULLY Updated" });
// }








