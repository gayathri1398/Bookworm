import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
    image:
    {
        data: Buffer,
        contentType: String
    }
},
{
    timestamps:true
});

const ImageModel = mongoose.model("Images",ImageSchema);

module.exports= ImageModel;