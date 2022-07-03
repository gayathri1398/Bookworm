import mongoose from 'mongoose';
import express from 'express';

// model
import AuthorModel from '../../database/authors';

const Router = express.Router();



/*
Route                 /
Des                  get all the authors
Params               none
Access               Public
Method               GET
*/

Router.get("/", async(req,res)=>{
   try {
    const getAuthors = await AuthorModel.find();
    return res.json({authors:getAuthors})
   } catch (error) {
    return res.status(500).json({error:error.message})
   }
});




export default Router;