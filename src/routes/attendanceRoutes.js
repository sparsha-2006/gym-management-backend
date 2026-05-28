const express =
require("express");

const router =
express.Router();

const {
verifyToken
}=require(
"../middleware/authMiddleware"
);

const {

checkIn,
checkOut,
getAttendance

}=require(
"../controllers/attendanceController"
);


router.post(
"/checkin",
verifyToken,
checkIn
);

router.put(
"/checkout",
verifyToken,
checkOut
);

router.get(
"/history",
verifyToken,
getAttendance
);

module.exports = router;