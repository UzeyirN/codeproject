const express = require("express");
const { register_user, login_user, logout, forgot_password, reset_password, getUserDetails, updatePassword, updateProfile, getAllUser, getSingleUser, updateUserRole, delete_user } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/authMiddle");

const router = express.Router();

router.route("/register").post(register_user);
router.route("/login").post(login_user)
router.route("/logout").get(logout);
router.route("/password/forgot").post(forgot_password);
router.route("/password/reset/:token").put(reset_password);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/admin/users").get(getAllUser)
router.route("/admin/users/:id").get(isAuthenticatedUser, authorizeRoles("admin"), getSingleUser)
router.route("/admin/users/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
router.route("/admin/users/:id").delete(delete_user)



module.exports = router;