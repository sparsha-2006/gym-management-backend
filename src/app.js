const express=require("express");

const cors=require("cors");

const morgan=require("morgan");

const authRoutes=require("./routes/authRoutes");

const memberRoutes=require("./routes/memberRoutes");

const membershipRoutes =require("./routes/membershipRoutes");

const attendanceRoutes =require("./routes/attendanceRoutes");

const trainerRoutes =require("./routes/trainerRoutes");

const adminRoutes =require("./routes/adminRoutes");

const errorHandler =require("./middleware/errorHandler");

const app=express();

app.use(express.json());

app.use(cors());

app.use(morgan("dev"));

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/member",
memberRoutes
);

app.use(
"/api/membership",
membershipRoutes
);

app.use(
"/api/attendance",
attendanceRoutes
);

app.use(
"/api/trainer",
trainerRoutes
);

app.use(
"/api/admin",
adminRoutes
);

app.get("/",(req,res)=>{

res.send(
"Gym API Running"
);

});

app.use(errorHandler);

module.exports=app;