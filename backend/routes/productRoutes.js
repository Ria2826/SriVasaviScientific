const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

const multer = require("multer");
const XLSX = require("xlsx");
const fs = require("fs");


// Upload setup
const upload = multer({
dest:"uploads/"
});



/* ==========================
GET ALL PRODUCTS / SEARCH
========================== */

router.get("/", async(req,res)=>{

try{

const search=req.query.search || "";

const products=await Product.find({

$or:[

{
productName:{
$regex:search,
$options:"i"
}
},

{
casNo:{
$regex:search,
$options:"i"
}
},

{
category:{
$regex:search,
$options:"i"
}
}

]

});

res.json(products);

}

catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

});



/* ==========================
GET PRODUCT BY ID
========================== */

router.get("/:id",async(req,res)=>{

try{

const product=
await Product.findById(
req.params.id
);

if(!product){

return res.status(404).json({

message:"Product not found"

});

}

res.json(product);

}

catch(error){

res.status(500).json({

message:error.message

});

}

});



/* ==========================
ADD SINGLE PRODUCT
========================== */

router.post("/",async(req,res)=>{

try{

const product=
await Product.create({

productName:req.body.productName,

casNo:req.body.casNo,

category:req.body.category,

grade:req.body.grade,

quantity:req.body.quantity,

price:"Contact Owner",

formula:req.body.formula,

description:req.body.description,

image:req.body.image,

structureImage:req.body.structureImage,

specifications:
req.body.specifications || [],

generalInformation:
req.body.generalInformation || [],

documentation:
req.body.documentation || []

});

res.status(201).json({

success:true,
data:product

});

}

catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

});



/* ==========================
UPLOAD EXCEL / CSV
========================== */

router.post(
"/upload",
upload.single("file"),

async(req,res)=>{

try{

const workbook=
XLSX.readFile(
req.file.path
);

const sheetName=
workbook.SheetNames[0];

const rows=
XLSX.utils.sheet_to_json(

workbook.Sheets[sheetName]

);


/* Map Excel data */

const products=
rows.map((row)=>({

productName:

row["Product Name"] ||
row["Material Name"] ||
row["Name"],


casNo:

row["CAS No"] ||
row["CAS"] ||
"",


category:

row["Category"] ||
"General Chemicals",


grade:

row["Grade"] ||
"Scientific Grade",


quantity:

row["Quantity"] ||
"Available",


price:
"Contact Owner",


structureImage:

`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${
row["CAS No"]
}/PNG`,



specifications:[

{
parameter:"Purity",
value:
row["Purity"] ||
"Not Available"
},

{
parameter:"Appearance",
value:
row["Appearance"] ||
"Not Available"
},

{
parameter:"Storage",
value:
row["Storage"] ||
"Room Temperature"
},

{
parameter:"Molecular Weight",
value:
row["Molecular Weight"] ||
"Not Available"
}

],



generalInformation:[

{
key:"CAS Number",
value:
row["CAS No"] ||
"-"
},

{
key:"Grade",
value:
row["Grade"] ||
"Scientific Grade"
},

{
key:"Category",
value:
row["Category"] ||
"General Chemicals"
},

{
key:"Manufacturer",
value:
"Sigma Aldrich"
}

],



documentation:[

{
name:
"Certificate Of Analysis",

url:"#"
},

{
name:
"MSDS",

url:"#"
}

]

}));


await Product.insertMany(
products
);


fs.unlinkSync(
req.file.path
);


res.json({

success:true,
count:
products.length,

message:
"Products uploaded successfully"

});

}

catch(error){

console.log(error);

res.status(500).json({

success:false,
message:error.message

});

}

}

);



/* ==========================
DELETE PRODUCT
========================== */

router.delete("/:id",async(req,res)=>{

try{

await Product.findByIdAndDelete(
req.params.id
);

res.json({

success:true,
message:
"Product deleted"

});

}

catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

});



/* ==========================
DELETE ALL PRODUCTS
========================== */

router.delete(
"/delete-all",

async(req,res)=>{

try{

await Product.deleteMany();

res.json({

success:true,
message:
"All products deleted"

});

}

catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

}

);



/* ==========================
UPDATE PRODUCT
========================== */

router.put("/:id",

async(req,res)=>{

try{

const product=

await Product.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);

res.json({

success:true,
data:product

});

}

catch(error){

res.status(500).json({

success:false,
message:error.message

});

}

});



module.exports=router;