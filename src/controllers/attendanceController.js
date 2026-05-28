const Attendance =
require("../models/Attendance");


//CHECK IN
exports.checkIn =
async(req,res)=>{

try{

const today =
new Date()
.toISOString()
.split("T")[0];


const existingAttendance =
await Attendance.findOne({

member:req.user.id,

date:today

});


if(existingAttendance){

return res.status(400)
.json({
message:
"Attendance already marked today"
});

}


const attendance =
await Attendance.create({

member:req.user.id,

date:today,

checkIn:
new Date().toLocaleTimeString()

});


res.status(201).json({

message:
"Check In Successful",

attendance

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};


//CHECK OUT
exports.checkOut =
async(req,res)=>{

try{

const today =
new Date()
.toISOString()
.split("T")[0];


const attendance =
await Attendance.findOne({

member:req.user.id,

date:today

});


if(!attendance){

return res.status(404)
.json({
message:
"No check-in found"
});

}


attendance.checkOut =
new Date().toLocaleTimeString();

await attendance.save();


res.status(200).json({

message:
"Check Out Successful",

attendance

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};


//ATTENDANCE HISTORY
exports.getAttendance =
async(req,res)=>{

try{

const history =
await Attendance.find({

member:req.user.id

});


res.status(200).json(history);

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};