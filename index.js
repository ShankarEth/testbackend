
const express = require("express");
const mongoose = require("mongoose");
// const router = require("./controller/router");
const schema = require('./model/schema');

mongoose.set("strictQuery",true); //To suppress the  warning
mongoose.connect("mongodb+srv://test:12345@cluster0.aifryjm.mongodb.net/favorites"); //favorites - Database Name
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occurred"));

const app = express();
// app.set("view engine","ejs");




app.get("/",(req,res)=>{
    schema.find((err,data)=>{
        if(err)
        {
            return err;
        }
        else{
            res.json(data);
        }
    })
})



// app.use("/routes",router);

const PORT = 4000;
app.listen(PORT,()=>{
    console.log("Server started at "+4000);
})

//Go to the browser make a request for http://localhost:4000 -res-> Hello World 
//http://localhost:4000/about -res-> About page

//http://localhost:4000/routes -> Home Page in green color
//http://localhost:4000/routes/about -> About page
