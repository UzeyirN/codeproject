const express = require("express")
const router = express.Router()



const latestContoller = require("../controllers/latestContoller")



router.get("/", latestContoller.latest_getAll)

router.get("/:id", latestContoller.latest_getAll_byId)

router.post("/", latestContoller.latest_post)

router.delete("/:id", latestContoller.latest_delete)

module.exports = router
