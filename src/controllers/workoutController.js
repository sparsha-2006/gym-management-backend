const Workout =require("../models/Workout");


//CREATE WORKOUT
exports.createWorkout =
async(req,res)=>{

try{

const {

member,
exercises,
schedule,
difficultyLevel

}=req.body;


const workout =
await Workout.create({

trainer:req.user.id,

member,

exercises,

schedule,

difficultyLevel

});


res.status(201).json({

message:
"Workout Created",

workout

});

}
catch(error){

console.log(error);

res.status(500).json({

message:"Server Error"

});

}

};