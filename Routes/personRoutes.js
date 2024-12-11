const express = require('express')
const router = express.Router();
const person=require('./../models/person')

// post route to add person
router.post('/',async(req,res)=>{
    try{
      const data=req.body; // assuming that request ody cotains the person data
  
    // creating a newperson  document using the mongoose model
     const newPerson= new person(data);
  
    // saving the newperson data to database
     const response= await newPerson.save();
      console.log("data saved")
      res.status(200).json(response)
    }
     catch(err){
       console.log(err)
       res.status(500).json({err:'Internal server error'})
     }
  })

  
// GET method to fetch detail of person
router.get('/',async(req,res)=>{
    try{
      const Persondata = await person.find()
      console.log("data fetched")
      res.status(200).json(Persondata)
    }
    catch(err){
      console.log(err)
       res.status(500).json({err:'Internal server error'})
    }
  })
  
  router.get('/:workType',async(req,res)=>{
     try { 
      const workType= req.params.workType; // extracting the work type of person from URL query
     if(workType=='chef' || workType=='waiter'|| workType=='owner' ){
      const response=await person.find({work: workType});
      console.log("response fetched");
      res.status(200).json(response);
     }
  
     else{
      res.send(404).json({error:'Invalid work type'})
     }
  
    }
  
    catch(err){
      console.log(err)
      res.status(500).json({err:'Internal server error'})
    }
  
  })
// delete method

  router.delete('/:id',async(req,res)=>{
    try { 
      const personId= req.params.id; // extracting  id from url  (agar url se fetch krna ho to params ka use krte h)
       const response =  await person.findByIdAndRemove(personId);

       if(!response){
       return res.send(404).json({error:'person not found'});
       }
       console.log("person deleted succesfully");
       return res.status(200).json(response);
     } 

     catch(err){
      console.log(err)
      return res.status(404).json({err:' error occured'})
     }

  })

  module.exports=router;