import express from 'express';

const Router = express.Router();


// model
import OrderModel from '../../database/order'

// Routes
/*
Route                     /
Des                      get all the orders
Params                   /:_id
Method                   GET
Access                   Public
*/

Router.get("/:_id",async(req,res)=>{
    try {
        const {_id}=req.params;
        const getOrderDetails = await OrderModel.findOne({user:_id});
        if(!getOrderDetails){
            return res.status(404).json({error:"User not found!"})
        }
        return res.status(200).json({orders:getOrderDetails})

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
})

/*
Route                 /new
Des                   posting an order
Params                /:_id
Access                Private
Method                POST
*/


Router.post("/new/:_id",async(req,res)=>{
    try {
        const {_id} = req.params;
        const {postOrder} = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {user:_id},
            {$push:{postOrder}},
             {new:true}
    );
    return res.status(200).json({orders:addNewOrder})
    } catch (error) {
       return res.status(500).json({error:error.message}) 
    }
});

export default Router;