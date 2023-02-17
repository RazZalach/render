require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5577;

app.all("*",(req,res)=>{
    res.status(200).json({msg:"Hello From The Cloud"});
});
app.listen(port,()=>{console.log("server on")});