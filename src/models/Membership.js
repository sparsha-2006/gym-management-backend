const mongoose =
require("mongoose");

const MembershipSchema =
new mongoose.Schema({

member:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

planName:{
type:String,
required:true
},

price:{

amount:Number,

currency:{
type:String,
default:"INR"
}

},

duration:{
type:Number
},

features:[String],

status:{
type:String,

enum:[
"Active",
"Expired",
"Cancelled"
],

default:"Active"
},

expiryDate:{
type:Date
}

},
{
timestamps:true
});

module.exports =
mongoose.model(
"Membership",
MembershipSchema
);