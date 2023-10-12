
const express = require("express");
const router = express.Router();
const schema = require('../model/schema');

router.get("/",(req,res)=>{
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


module.exports = router;