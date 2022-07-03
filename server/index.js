
require("dotenv").config();

// libraries
import express from "express";
import bodyParser from "body-parser";




// DatabaseConnection
import ConnectDB from './database/connection'

// API routes
import Book from './API/bookAPI/book.js';
import Image from './API/imageAPI/image.js';
import Order from './API/orderAPI/order.js';
import Author from './API/authorAPI/author.js';

const lib = express();


// application middleware
lib.use(express.json());
lib.use(express.urlencoded({ extended: true }))


// application routes
lib.use("/book",Book);
lib.use("/image",Image);
lib.use("/author",Author);
lib.use("/order",Order);



lib.get("/",(req,res)=>res.send("Successfully,setup done!!"));

lib.listen(4000,()=>{
    ConnectDB()
    .then(()=>console.log("Yovv!! Successfully Done!!!🚀")) 
    .catch(()=>console.log("Server is connected but Database is not connected!!"))
   
})