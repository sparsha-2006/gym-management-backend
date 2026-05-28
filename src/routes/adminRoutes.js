const express =require("express");

const router =express.Router();

const {
verifyToken
}=require(
"../middleware/authMiddleware"
);

const {
authorizeRoles
}=require(
"../middleware/roleMiddleware"
);

const {

getUsers,
blockUser,
unblockUser,
getAnalytics

}=require(
"../controllers/adminController"
);


//GET ALL USERS
router.get(

"/users",

verifyToken,

authorizeRoles("Admin"),

getUsers

);


//BLOCK USER
router.put(

"/block/:id",

verifyToken,

authorizeRoles("Admin"),

blockUser

);


//UNBLOCK USER
router.put(

"/unblock/:id",

verifyToken,

authorizeRoles("Admin"),

unblockUser

);


//ANALYTICS
router.get(

"/analytics",

verifyToken,

authorizeRoles("Admin"),

getAnalytics

);

module.exports = router;