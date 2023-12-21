const express=require('express')
const app=express()
require('dotenv').config()

const port=process.env.PORT 
console.log(port)

// const connection=require('./db')


// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.listen(port,async()=>{
// try {
//     await connection;
//     console.log("db connected successfully")
// } catch (error) {
//     console.log('error while connecting db');
// }
// console.log(`server connected in port ${port}`);
// })