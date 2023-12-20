const mongoose=require('mongoose')
const Schema=mongoose.Schema
const {isEmail}=require('validator')


const UseSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    emil:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[isEmail,'Please enter a valid email']
    },
    password:{
        type:String,
        required:[true,'Please enter a valid Password'],
        minlength:[6,'Min 6 char needed']
    },
    reg_date:{
        type:Date,
        default:Date.now
    }
})

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;