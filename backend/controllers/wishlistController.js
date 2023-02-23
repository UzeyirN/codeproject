const Wishlist = require('../models/wishlistModel')
const Product = require("../models/featuredModel");


exports.wishlist_getAll = (req, res) => {
    Wishlist.find({}, (err, docs) => {
        if (!err) {
            res.send(docs)
        } else {
            res.status(500).json({ message: err })
        }
    })
}

exports.wishlist_getAll_byId = (req, res) => {
    const { id } = req.params;
    Wishlist.findById(id, (err, docs) => {
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

exports.wishlist_delete = (req, res) => {
    const { id } = req.params;
    Wishlist.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
}

exports.wishlist_post = async (req, res) => {
    const { id } = req.body;
    const data = await Wishlist.find({ productId: id });
    if (data.length > 0) return;
    const product = await Product.findById(id);
    await Wishlist.create({
        productId: id,
        image: product.image,
        brand: product.brand,
        appelation: product.appelation,
        price: product.price
    });
    res.json({
        message: "success",
    });
}


exports.wishlist_deleteAll = (req, res) => {
    Wishlist.deleteMany((err) => {
        if (!err) {
            res.send("SUCCESSFULY DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
};












