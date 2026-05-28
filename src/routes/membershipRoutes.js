const express =require("express");

const router =express.Router();

const {
verifyToken
}=require(
"../middleware/authMiddleware"
);

const {
subscribePlan
}=require(
"../controllers/membershipController"
);


router.post(
"/subscribe",
verifyToken,
subscribePlan
);

module.exports = router;