const express = require("express")
const router = express.Router()


const contactUsController =require("../controllers/contactUsController")


router.get("/", contactUsController.contactUS_getAll)

router.get("/:id", contactUsController.contactUS_getAll_byId)

router.post("/", contactUsController.contactUS_post)

router.delete("/:id", contactUsController.contactUS_delete)

module.exports = router
