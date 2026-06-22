require("dotenv").config();

const mongoose=require("mongoose");
const Product=require("./models/Product");

mongoose
.connect(process.env.MONGO_URI)
.then(async()=>{

console.log("MongoDB Connected");

await Product.deleteMany();

await Product.insertMany([

{
productName:"Curcumin Herbal Extract",
casNo:"458-37-7",
category:"Herbal Extracts",
grade:"Pharma Grade",
quantity:"500 g",
price:2500,
formula:"C21H20O6",
description:"Natural turmeric extract for nutraceutical applications",
image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
},

{
productName:"Peptide Research Chemical",
casNo:"10000-45-6",
category:"Peptide Chemicals",
grade:"Research Grade",
quantity:"100 mg",
price:6000,
formula:"C12H18N2O5",
description:"High purity peptide compound",
image:"https://images.unsplash.com/photo-1532187643603-ba119ca4109e"
},

{
productName:"Pharmaceutical Excipient",
casNo:"9004-34-6",
category:"Excipients",
grade:"USP Grade",
quantity:"1 kg",
price:3500,
formula:"C6H10O5",
description:"Pharmaceutical formulation excipient",
image:"https://images.unsplash.com/photo-1576086213369-97a306d36557"
}

]);

console.log("Products Added");

process.exit();

})
.catch(err=>{

console.log(err);

});