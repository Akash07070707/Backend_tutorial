const mongoose = require('mongoose')

const mongoURL="mongodb://localhost:27017/hotels" // url

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