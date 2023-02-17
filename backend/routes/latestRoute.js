const express = require("express")
const router = express.Router()

const latestContoller = require("../controllers/latestContoller")


router.get("/", latestContoller.latest_getAll)

router.get("/:id", latestContoller.latest_getAll_byId)

router.post("/", latestContoller.latest_post)

router.delete("/:id", latestContoller.latest_delete)

router.put("/:id",latestContoller.latest_update );



module.exports = router
