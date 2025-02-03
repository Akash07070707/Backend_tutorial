// let fs= require('fs');
// let os= require('os');

//  let user=os.userInfo();
//  console.log(user);
 
//  fs.appendFile('greeting.txt',' hijsdj ' + user.username ,()=>{
//     console.log("ia am creating a file");
    
//  });

//888888888888888888888888888888

// const notes=require("./notes.js") // i am importing content of another file in server .js file by require method
 
// let add=notes.add;
// let age=notes.age;

// console.log(add(12,12));
// console.log(age);

 // 88888888888888888888888888888888888         (loadash install for array method operation)

// let lodash= require('lodash')

// let arr=[23,231312,34343,1312,11,11,111,111,222,222,222,222222]

// console.log(lodash.uniq(arr));

// 8888888888888888888888888888888888888         (express js)


const express = require('express')
const app = express()
const db=require('./db')
const bodyParser=require('body-parser')
app.use(bodyParser.json())
require('dotenv').config();

app.get('/', function (req, res) {
  res.send('hey buddy whats up')
})

 // importing the router file of person
const pesonRoutes = require('./Routes/personRoutes');
app.use('/person',pesonRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log("server started")
})

// hello this is testing
// this is for testing purpose 1/2/25
