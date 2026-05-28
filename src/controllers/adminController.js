const User =require("../models/User");

const Attendance =require("../models/Attendance");

const Membership =require("../models/Membership");


//GET ALL USERS
exports.getUsers =
async(req,res)=>{

try{

const users =
await User.find();

res.status(200).json(users);

}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

};


//BLOCK USER
exports.blockUser =
async(req,res)=>{

try{

const user =await User.findByIdAndUpdate(

req.params.id,

{
isBlocked:true
},

{
new:true
}

);

res.status(200).json({

message:"User Blocked",

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


//UNBLOCK USER
exports.unblockUser =
async(req,res)=>{

try{

const user =await User.findByIdAndUpdate(

req.params.id,

{
isBlocked:false
},

{
new:true
}

);

res.status(200).json({

message:"User Unblocked",

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


//ANALYTICS
exports.getAnalytics =
async(req,res)=>{

try{

const totalUsers =await User.countDocuments();

const totalMemberships =await Membership.countDocuments();

const totalAttendance =await Attendance.countDocuments();


res.status(200).json({

totalUsers,

totalMemberships,

totalAttendance

});

}
catch(error){

console.log(error);

res.status(500).json({
message:"Server Error"
});

}

};