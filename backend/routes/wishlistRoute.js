const express = require("express")
const router = express.Router()

const wishlistController = require("../controllers/wishlistController")

router.get("/", wishlistController.wishlist_getAll);
router.get("/:id", wishlistController.wishlist_getAll_byId);
router.post("/", wishlistController.wishlist_post);
router.delete("/:id", wishlistController.wishlist_delete);
router.delete('/', wishlistController.wishlist_deleteAll);

module.exports = router
