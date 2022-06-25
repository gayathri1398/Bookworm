const express = require("express")

const lib = express();

lib.use(express.json());


lib.get("/",(req,res)=>res.send("Successfully,setup done!!"));

lib.listen(4000,()=>{
    console.log("Success!!")
})