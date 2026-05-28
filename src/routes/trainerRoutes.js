const express =require("express");

const router =express.Router();

const {
verifyToken
}=require(
"../middleware/authMiddleware"
);

const {
createWorkout
}=require(
"../controllers/workoutController"
);


router.post(
"/workout",
verifyToken,
createWorkout
);

module.exports = router;