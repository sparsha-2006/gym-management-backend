const mongoose =
require("mongoose");

const AttendanceSchema =
new mongoose.Schema({

member:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

date:{
type:String
},

checkIn:{
type:String
},

checkOut:{
type:String
}

},
{
timestamps:true
});


//prevent duplicate attendance
AttendanceSchema.index(
{
member:1,
date:1
},
{
unique:true
}
);

module.exports =
mongoose.model(
"Attendance",
AttendanceSchema
);