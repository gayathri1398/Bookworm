
require("dotenv").config();
import express from "express";

const lib = express();

lib.use(express.json());

// DatabaseConnection
import ConnectDB from './database/connection'

lib.get("/",(req,res)=>res.send("Successfully,setup done!!"));

lib.listen(4000,()=>{
    ConnectDB()
    .then(()=>console.log("Yovv!! Successfully Done!!!🚀")) 
    .catch(()=>console.log("Server is connected but Database is not connected!!"))
   
})