const express = require("express");
const router = express.Router();
const multer = require("multer");
const xlsx = require("xlsx");
const Product = require("../models/Product");
const axios = require("axios");

const upload = multer({
storage: multer.memoryStorage()
});

router.post("/", upload.single("file"), async(req,res)=>{

try{

if(!req.file){
return res.status(400).json({
message:"No file uploaded"
});
}

const workbook = xlsx.read(
req.file.buffer,
{
type:"buffer"
}
);

const sheetName=workbook.SheetNames[0];

const rows=xlsx.utils.sheet_to_json(
workbook.Sheets[sheetName]
);

const products=rows.map((row)=>({

productName:
row["Product Name"] || "",

casNo:
String(row["CAS No"] || ""),

category:
row["Category"] || "Others",

grade:
row["Grade"] || "",

quantity:
row["Quantity"] || "",

price:
"Contact Owner",

specifications:[],
generalInformation:[],
documentation:[]
}));

await Product.deleteMany({});

const insertedProducts=
await Product.insertMany(products);


for(const product of insertedProducts){

try{

await axios.post(
"http://localhost:5000/api/products/auto-fetch",
{
casNo:product.casNo,
productId:product._id
}
);

console.log(
`Fetched ${product.productName}`
);

}
catch(error){

console.log(
`Failed ${product.productName}`
);

}

}

res.json({
success:true,
message:"Products uploaded"
});

}

catch(error){

console.log(error);

res.status(500).json({
success:false,
message:error.message
});

}

});

module.exports=router;