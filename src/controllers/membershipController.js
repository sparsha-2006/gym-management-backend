const Membership =
require("../models/Membership");


//SUBSCRIBE PLAN
exports.subscribePlan =
async(req,res)=>{

try{

const {
planName,
amount,
duration,
features
}=req.body;


const expiry =
new Date();

expiry.setDate(
expiry.getDate() + duration
);


const membership =
await Membership.create({

member:req.user.id,

planName,

price:{
amount
},

duration,

features,

expiryDate:expiry

});


res.status(201).json({

message:
"Membership Activated",

membership

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};