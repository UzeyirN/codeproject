const express = require("express")
const router = express.Router()

const featuredContoller = require("../controllers/featuredContoller")


router.get("/", featuredContoller.featured_getAll)

router.get("/:id", featuredContoller.featured_getAll_byId)

router.post("/", featuredContoller.featured_post)

router.delete("/:id", featuredContoller.featured_delete)


router.put("/:id", featuredContoller.featured_update);


module.exports = router
