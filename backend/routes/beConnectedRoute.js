const express = require("express")
const router = express.Router()

const beConnectedContoller = require("../controllers/beConnectedController")


router.get("/", beConnectedContoller.beConnected_getAll)

router.get("/:id", beConnectedContoller.beConnected_getAll_byId)

router.post("/", beConnectedContoller.beConnected_post)

router.delete("/:id", beConnectedContoller.beConnected_delete)

module.exports = router
