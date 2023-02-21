const express = require("express");
const { register_user, login_user, logout, forgot_password, reset_password, getUser_details, update_password, update_profile, getAll_user, getSingle_user,
    updateUser_role, delete_user } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authMiddle");

const router = express.Router();

router.route("/register").post(register_user);
router.route("/login").post(login_user)
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgot_password);
router.route("/password/reset/:token").put(reset_password);
router.route("/me").get(isAuthenticatedUser, getUser_details);
router.route("/password/update").put(isAuthenticatedUser, update_password);
router.route("/me/update").put(isAuthenticatedUser, update_profile);
router.route("/admin/users").get(getAll_user)
router.route("/admin/users/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingle_user)
router.route("/admin/users/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUser_role)
router.route("/admin/users/:id").delete(delete_user)



module.exports = router;