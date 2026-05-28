const express =require("express");

const router =express.Router();

const {
body
}=require(
"express-validator"
);

const {
register,
login
}=require(
"../controllers/authController"
);


//REGISTER
router.post(

"/register",

[
body("email")
.isEmail(),

body("password")
.isLength({min:6})
],

register

);


//LOGIN
router.post(
"/login",
login
);

module.exports = router;