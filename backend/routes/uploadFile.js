const express=require("express");
const router=express.Router();

const multer=require("multer");
const fs=require("fs");
const xlsx=require("xlsx");
const csv=require("csv-parser");

const Product=require("../models/Product");

const upload=multer({
dest:"uploads/"
});

router.post(
"/upload",
upload.single("file"),
async(req,res)=>{

try{

const file=req.file;

let products=[];

const extension=
file.originalname
.split(".")
.pop()
.toLowerCase();


// CSV

if(extension==="csv"){

await new Promise((resolve)=>{

fs.createReadStream(
file.path
)

.pipe(csv())

.on("data",(row)=>{

products.push({

productName:
row["Product Name"] || "",

casNo:
row["CAS No"] || "",

category:
row["Category"] ||
"General Chemicals",

grade:
row["Grade"] ||
"Scientific Grade",

quantity:
row["Quantity"] ||
"Available",


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

]

});

})

.on("end",resolve);

});

}


// Excel (.xlsx/.xls)

else if(
extension==="xlsx" ||
extension==="xls"
){

const workbook=
xlsx.readFile(
file.path
);

const sheetName=
workbook.SheetNames[0];

const sheet=
xlsx.utils.sheet_to_json(
workbook.Sheets[sheetName]
);

products=sheet.map((row)=>({

productName:
row["Product Name"] || "",

casNo:
row["CAS No"] || "",

category:
row["Category"] ||
"General Chemicals",

grade:
row["Grade"] ||
"Scientific Grade",

quantity:
row["Quantity"] ||
"Available",


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

]

}));

}

else{

return res.status(400).json({

success:false,
message:
"Only CSV/XLS/XLSX supported"

});

}


await Product.insertMany(
products
);

fs.unlinkSync(
file.path
);

res.json({

success:true,
message:
`${products.length} products uploaded`

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

module.exports=router;