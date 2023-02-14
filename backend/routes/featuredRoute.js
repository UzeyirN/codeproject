const express = require("express")
const router = express.Router()

// const cors = require("cors")
// const bodyParser = require("body-parser")
// const mongoose = require("mongoose")
// const dotenv = require("dotenv")

const featuredContoller = require("../controllers/featuredContoller")
// const { featured_getAll, featured_getAll_byId, featured_post, featured_delete } = require("../controllers/featuredContoller")

// const {featured_getAll}=require("../controllers/featuredContoller")
// const {featured_getAll_byId}=require("../controllers/featuredContoller")
// const {featured_post}=require("../controllers/featuredContollers")
// const {featured_delete}=require("../controllers/featuredContoller")




router.get("/", featuredContoller.featured_getAll)

router.get("/:id", featuredContoller.featured_getAll_byId)

router.post("/", featuredContoller.featured_post)

router.delete("/:id", featuredContoller.featured_delete)

module.exports = router
