const User = require("../models/User");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const {
validationResult
}=require(
"express-validator"
);

//REGISTER
exports.register =
async(req,res)=>{

try{

    const errors =
validationResult(req);

if(!errors.isEmpty()){

return res.status(400)
.json({

errors:errors.array()

});

}

const {
name,
email,
password,
role,
phone
}=req.body;


//check existing user
const existingUser =
await User.findOne({email});

if(existingUser){

return res.status(400)
.json({
message:"User already exists"
});

}


//hash password
const hashedPassword =
await bcrypt.hash(password,10);


//create user
const user =
await User.create({

name,
email,
password:hashedPassword,
role,
phone

});


res.status(201).json({

message:"User Registered Successfully",

user

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};


//LOGIN
exports.login =
async(req,res)=>{

try{

const {
email,
password
}=req.body;


//check user
const user =
await User.findOne({email});

if(!user){

return res.status(400)
.json({
message:"Invalid Email"
});

}


//compare password
const isMatch =
await bcrypt.compare(
password,
user.password
);


if(!isMatch){

return res.status(400)
.json({
message:"Invalid Password"
});

}


//generate jwt token
const token =
jwt.sign(

{
id:user._id,
role:user.role
},

process.env.JWT_SECRET,

{
expiresIn:"1d"
}

);


res.status(200).json({

message:"Login Successful",

token,

user:{
id:user._id,
name:user.name,
email:user.email,
role:user.role
}

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};