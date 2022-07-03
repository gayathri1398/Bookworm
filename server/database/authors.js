import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
    name:{type:String,required:true},
    books:[{
        type: String,
        required:true
    }],
    authorDescription:{type:String,required:true},
    age:{type:Number,required:true}
});

const AuthorModel = mongoose.model("authors",AuthorSchema);

module.exports= AuthorModel;