
import express from 'express';
import mongoose from 'mongoose';


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


/*
Route                   /
Des                     get a specific book
Params                  /:_id
Access                  Public
Method                  GET
*/
Router.get("/:_id",async(req,res)=>{
   try {
      const{_id}= req.params;
   //   console.log(typeof(_id));
      const specificBook = await BookModel.findOne({_id});
       
   //   console.log(typeof(_id));
      // const id= req.params._id;
      // const specificBook = await BookModel.findOne({_id:id});

      if(!specificBook){
         return res.send(`No such book with the id:${_id}`)
      }
      return res.status(500).json({specificBook})
   } catch (error) {
    return res.status(500).json({error:error.message})  
   }
});


/*
Route                       /
Des                         add a new property to books
Params                      /:add/:_id
Access                      Public
Method                      GET
*/
Router.post("/:add/:_id",async(req,res)=>{
   try {
      const {updatedAuthor} = req.body;
      const updateBook = await BookModel.findOneAndUpdate(
         {_id:req.params._id},
         {author:updatedAuthor},
         {new:true});
      if(!updateBook){
         res.send(`No such Book with the id ${req.params._id}`)
      }
      return res.json({updateBook})
   } catch (error) {
      return res.json({error:error.message})
   }
})

// insert a property to mongodb book model

// Router.put("/:insert/:property/:_id",async(req,res)=>{
//    try {
//       const id=req.params._id;
//       const {publisher} =req.body;
//       console.log(typeof(id));
//       console.log(id);
//       console.log(publisher);
      
//       const addProperty = await BookModel.insert({
//          // {_id:id,
//          // {$set:
//          //    {publisher:publisher}
//          // },
//         publisher:publisher}
        
//          // function (err, addProperty) {
//          //    if (err) {
//          //      console.log(err);
//          //    } else {
//          //      console.log("Updated books : ", addProperty);
//          //    }
//          //  }
//          )
//       // if(!addProperty){
//       //    return res.send(`No such Book with the id ${id}`)
//       // }
//       return res.json({addProperty})
//    } catch (error) {
//       return res.json({error:error.message})
//    }
// })


/*
Route                   /
Des                     get a specificbook based on a category
Params                  /:category
Access                  Public
Method                  GET
*/

Router.get("/c/:category",async(req,res)=>{
   try {
      const {category} = req.params;
      const categorizedBooks = await BookModel.findOne({category:{$regex:category,$options:"i"}});
      if(!categorizedBooks){
        return res.status(404).message("No such category");
      }
      return res.status(200).json({Books:categorizedBooks});
   } catch (error) {
      return res.json({error:error.message})
   }
})



export default Router;