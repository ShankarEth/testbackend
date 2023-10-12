
const express = require("express");
const mongoose = require("mongoose");
const router = require("./controller/router");

mongoose.set("strictQuery",true); //To suppress the  warning
mongoose.connect("mongodb+srv://test:12345@cluster0.aifryjm.mongodb.net/favorites"); //favorites - Database
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

const app = express();
app.set("view engine","ejs");



app.use("/routes",router);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})

//Go to the browser make a request for http://localhost:4000 -res-> Hello World 
//http://localhost:4000/about -res-> About page

//http://localhost:4000/routes -> Home Page in green color
//http://localhost:4000/routes/about -> About page
