const mongoose=require("mongoose");

const EnquirySchema=new mongoose.Schema({

customerName:{
type:String,
required:true
},

email:{
type:String
},

phone:{
type:String
},

company:{
type:String
},

productName:{
type:String
},

message:{
type:String
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports=
mongoose.model(
"Enquiry",
EnquirySchema
);