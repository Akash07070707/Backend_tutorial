const mongoose = require('mongoose')
require('dotenv').config();

// const mongoURL=process.env.Local_DB_URL // local mongodb connection url
const mongoURL=process.env.online_DB_URL // online mongodb connection url using Atlas

//connection of mongodb
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get default connection
//mongoose maintain default connection object through mogodb connection

const db=mongoose.connection;

//event listner on database
db.on('connected',()=>{
    console.log("connected to mongodb")
})
db.on('disconnected',()=>{
    console.log("disconnected to mongodb")
})
db.on('error',(err)=>{
    console.error("error happend",err)
})
 //exporting db connection so we can use in nodejs application

 module.exports=db;