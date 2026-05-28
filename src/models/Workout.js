const mongoose =require("mongoose");

const WorkoutSchema =new mongoose.Schema({

trainer:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

member:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

exercises:[String],

schedule:{

day:String,

time:String

},

difficultyLevel:{

type:String,

enum:[
"Beginner",
"Intermediate",
"Advanced"
]

}

},
{
timestamps:true
});

module.exports =
mongoose.model(
"Workout",
WorkoutSchema
);