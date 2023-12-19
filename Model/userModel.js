const mongoose=require('mongoose')
const Schema=mongoose.Schema
const {isEmail}=require('validator')


const UseSchema=new Schema({
    name:{},
    emil:{},
    password:{},
    reg_date:{}
})