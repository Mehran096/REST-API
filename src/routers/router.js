const express = require("express");
const router = new express.Router();
const Reset = require("../models/datas");

// router.get("/mehran", (req,res) => {
//     res.send("hello body")
// })


// create api
router.post("/students", async(req,res) => {
    try{  
 
     const anydata = new Reset(req.body)
     const data = await anydata.save();
     res.status(200).send(data);
    }catch(err){
        res.status(400).send(err);
    }
 })
 
 //read api
 router.get("/students", async(req,res) => {
     try{  
  
      const anydata = await Reset.find();
       
      res.status(200).send(anydata);
     }catch(err){
         res.status(404).send(err);
     }
  })
 
 
  //single read api
  router.get("/students/:id", async(req,res) => {
     try{  
 
         const _id = req.params.id;
  
      const anydatas = await Reset.findById(_id);
       
      res.status(200).send(anydatas);
     }catch(err){
         res.status(500).send(err);
     }
  })
 
 
 //update api
  router.patch("/students/:id", async(req,res) => {
     try{  
 
         const id = req.params.id;
  
      const datasupdate = await Reset.findByIdAndUpdate(id, req.body,  {new:true});
       
      res.status(200).send(datasupdate);
     }catch(err){
         res.status(404).send(err);
     }
  })
 
 //delete api
  router.delete("/students/:id", async(req,res) => {
     try{  
 
         const _id = req.params.id;
  
      const anydatas = await Reset.findByIdAndDelete(_id);
       
      res.status(200).send(anydatas);
     }catch(err){
         res.status(500).send(err);
     }
  })
 

module.exports = router;