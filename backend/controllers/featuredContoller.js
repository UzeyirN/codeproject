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


exports.featured_update = async (req, res) => {
    try {
        const example = await Featured.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!example) {
            return res.status(404).json({ message: 'Featured not found' });
        }

        res.status(200).json(example);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

