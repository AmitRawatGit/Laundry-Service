const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const jwt = require("jsonwebtoken");
const cors=require("cors");
const userRoutes=require("./routes/user");
const orderRoutes=require("./routes/order")
mongoose.connect("mongodb+srv://sandeep27:sandeep27@cluster0.nic5u.mongodb.net/laundry_project?retryWrites=true&w=majority");
app.use(cors());
app.use(bodyParser());

app.use("/",userRoutes);
app.use("/orders",orderRoutes);
app.listen(3070, () =>{
    console.log("server is running at port 3070");
})