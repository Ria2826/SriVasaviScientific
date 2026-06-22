const express = require("express");
const router = express.Router();

const Enquiry = require("../models/Enquiry");
const sendEmail = require("../utils/sendEmail");

router.post("/", async(req,res)=>{

try{

const enquiry=
await Enquiry.create(req.body);

console.log("Enquiry saved");

await sendEmail(req.body);

console.log("Email function executed");

res.status(201).json({

success:true,
data:enquiry

});

}

catch(error){

console.log("ENQUIRY ERROR:");

console.log(error);

res.status(500).json({

success:false,
message:error.message

});

}

});
router.get("/",async(req,res)=>{

try{

const enquiries=
await Enquiry.find();

res.json({

success:true,
data:enquiries

});

}

catch(error){

res.status(500).json({

message:error.message
});

}

});
module.exports=router;