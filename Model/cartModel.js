const mongoose=require('mongoose')
const Schema=mongoose.Schema

const cartSchema=new Schema({
    userId:{
        type:String
    },
    items:[
        {
            productId:{
                type:String,
                required:true
            },
            name:String,
            quantity:{
                type:Number,
                required:true,
                min:[1,'Min quantity is 1'],
                default:1
            },
            price:Number
        }
    ],
    bill:{
        type:Number,
        required:true,
        default:0
    }
})

const cartModel=mongoose.Model('cart',cartSchema)
module.exports=cartModel;