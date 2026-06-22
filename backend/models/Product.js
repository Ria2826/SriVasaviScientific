const mongoose=require("mongoose");

const productSchema=

new mongoose.Schema({

productId:String,

productName:String,

casNo:String,

hsnCode:String,

category:String,

subCategory:String,

grade:String,

quantity:String,

price:String,

description:String,

structureImage:String,


specifications:{

molecularFormula:String,

molecularWeight:String,

storage:String,

purity:String

},


generalInfo:{

iupacName:String,

catalogNo:String

},


documentation:{

sds:String,

coa:String,

productSheet:String

}

},

{

timestamps:true

}

);

module.exports=
mongoose.model(
"Product",
productSchema
);