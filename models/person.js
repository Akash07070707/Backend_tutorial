const mongoose = require('mongoose');
// creating person schema
const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    age:{
        type:Number
    },

    work:{
        type:String,
        enum:['chef','waiter','owner'],
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

})

//creating person model

const person=mongoose.model('person',personschema);
module.exports=person;