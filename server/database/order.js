import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    //  user:{
    //     type:mongoose.Types.ObjectId,
    //     ref:"users"

    //  },
     orderDetails:[{
        book:{
            type:mongoose.Types.ObjectId,
            ref:"books"   
        },
        quantity:{type:Number,required:true},
        payment:{type:String,required:true},
        status:{type:String,default:"Placed"},
        paymentDetails:{
            itemTotal:{type:Number,required:true},
            promo: {type: Number, required: true},     // promocode:amount
            tax: {type: Number, required: true},
        }
     }]
},{
    timestamps:true
})

const OrderModel = mongoose.model("orders",OrderSchema);

module.exports = OrderModel;