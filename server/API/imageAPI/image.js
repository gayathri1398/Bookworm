import mongoose from 'mongoose';
import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

// database
import ImageModel from "../../database/images.js";


const Router = express.Router();

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
    
  };

let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },
    // filename:(req,file,cb)=>{
    //     cb(null,file.originalname + "-" + Date.now())
    // }
    filename: (req, file, callback) => {  
        const name = file.originalname;
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
      }
})

let upload = multer({storage:storage});


// console.log(Date.now());

/*
Route               /
Des                get all images
Params            none
Access            Public
Method            GET
*/

Router.get("/",async(req,res)=>{
    try {
        const getImages = await ImageModel.find()
        return res.json({items:getImages})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route                   /
Des                     posting a new image
Params                  new 
Access                  Public
Method                  POST
*/

Router.post("/new",upload.single("image"),async(req,res,next)=>{
    try {
        const file = req.file;
       
        let obj ={
            image:{
                data:fs.readFileSync('C:/Users/HP/Desktop/library/server/uploads/' + file.filename),
                contentType:file.mimetype

            }
        }
    
    const imageCreated = await ImageModel.create(obj);
       return res.json({imageCreated,message:"posted successfully"}); 

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

// Router.post('/new', upload.single('image'), async (req, res, next) => {
//    try {
//     console.log(req.file);
//     console.log(__dirname);
//     const obj = {image:{ data:new Buffer.from(req.file.buffer, 'base64'), contentType: req.file.mimetype }};
//     console.log(obj);
//     const savedImage = await ImageModel.create(obj);
//     res.send(savedImage);
//    } catch (error) {
//          return res.status(500).json({error:error.message})
//    }
// });

export default Router;