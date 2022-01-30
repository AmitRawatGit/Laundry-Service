const express=require("express");
const Order=require("../models/orders");
const router=express.Router();

router.post('/create',async function(req,res){
    
    try{
        const { products } = req.body; //undefined coming
        console.log("products", products);
        console.log(req.body);
        const status=["in washing","ready to pickup", "ready to deliver"];

        const state = Math.floor(Math.random() * 2);
        
        const order = await Order.create({ user : req.user, items : products, status : status[state] });
        res.json({
            status:"success.",
            message:"order created."
        })

    }catch(e){
        res.json({
            status:"failed.",
            message:e.message
        })
    }
})

router.get("/pastorders",async function(req,res){
    try{
        const orders= await Order.find({user:req.user})
        res.json({
            status:"success.",
            data:{
                orders
            }
        })
    }catch(e){
        res.json({
            status:"failed.",
            message:e.message
        })
    }
})

router.put("/cancelorder/:id",async function(req,res){
    try{
        await Order.updateOne({_id:req.params.id},{status:"cancelled"})
        res.json({
            status:"success.",
            message:"order cancelled."
        })
    }catch(e){
        res.json({
            status:"failed",
            message:e.message
        })
    }
})

module.exports=router;