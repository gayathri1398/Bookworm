import mongoose from 'mongoose';

const BookSchema =new mongoose.Schema({

    title:{type:String,required:true},
    isbn:{type:String,required:true},
    image:{
        type:mongoose.Types.ObjectId,
         ref:"images"
        },
    author:{type:String,required:true},
    description:{type:String,required:true},
    publishedDate:{type:Date},
    price:{type:String,default:"₹120"}

},
{
    timestamps:true
});

const BookModel = mongoose.model("books",BookSchema);
// export const BookModel = mongoose.model("books",BookSchema);

module.exports= BookModel;


