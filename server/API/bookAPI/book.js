
import express from 'express';


const Router = express.Router();


// database models
import BookModel from '../../database/books.js'


// route
/*
Route               /
Des                 to get all books
Params              none 
Access              Public
Method              GET      
*/

Router.get("/", async(req,res)=>{
     try {
        const getBooks = await BookModel.find();
        return res.json({books:getBooks});
     } catch (error) {
        return res.status(500).json({error:error.message})
     }
})



/*
Route              /
Des               post a new book
Params            new
Access            Public
Method            POST
*/

Router.post("/new",async(req,res)=>{
   
    try {
         const {bookDetails}= req.body
        const newBook = await BookModel.create(bookDetails);
        return res.json({books:newBook})
    } catch (error) {
       return res.status(500).json({error:error.message})
    }
});

export default Router;