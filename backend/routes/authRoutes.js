const express=require("express");

const router=express.Router();

router.post("/login",(req,res)=>{

const {email,password}=req.body;

if(
email==="rkdpm84@gmail.com" &&
password==="krish123"
){

return res.json({

success:true,
token:"svss-admin"

});

}

return res.status(401).json({

success:false,
message:"Wrong email or password"

});

});

module.exports=router;