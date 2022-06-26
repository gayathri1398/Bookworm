import mongoose, { Schema } from 'mongoose';

const BookSchema =new Schema ({

    title:{type:String,required:true},
    isbn:{type:String,required:true},
    author:{type:String,required:true},
    description:{type:String,required:true},
    publishedDate:{type:Date},

},
{
    timestamps:true
});

const BookModel = mongoose.Model("books",BookSchema);

module.exports= BookModel;