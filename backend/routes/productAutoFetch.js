const express=require("express");
const axios=require("axios");
const Product=require("../models/Product");

const router=express.Router();

router.post(
"/auto-fetch",
async(req,res)=>{

try{

const {
casNo,
productId
}=req.body;

const product=
await Product.findById(productId);

if(!product){

return res.status(404).json({
message:"Product not found"
});

}

const response=
await axios.get(

`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${casNo}/property/MolecularFormula,MolecularWeight/JSON`

);

const properties=
response.data
?.PropertyTable
?.Properties?.[0];

product.specifications=[

{
parameter:"Molecular Formula",
value:
properties?.MolecularFormula || "-"
},

{
parameter:"Molecular Weight",
value:
properties?.MolecularWeight || "-"
}

];

product.generalInformation=[

{
key:"Storage",
value:"Room Temperature"
},

{
key:"Shelf Life",
value:"60 Months"
}

];

product.documentation=[

{
name:"Certificate of Analysis",
url:"#"
},

{
name:"MSDS",
url:"#"
}

];

await product.save();

res.json({
success:true
});

}

catch(error){

console.log(error);

res.status(500).json({
message:error.message
});

}

}
);

module.exports=router;