const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");
require("dotenv").config();

const Admin=require("./models/Admin");

mongoose.connect(process.env.MONGO_URI)
.then(async()=>{

try{

const existingAdmin=
await Admin.findOne({
email:"rkdpm84@gmail.com"
});

if(existingAdmin){

await Admin.deleteOne({
email:"rkdpm84@gmail.com"
});

}

const hashedPassword=
await bcrypt.hash(
"krish123",
10
);

await Admin.create({

email:"rkdpm84@gmail.com",
password:hashedPassword

});

console.log(
"Admin created successfully"
);

process.exit();

}
catch(err){

console.log(err);

}

})
.catch(err=>{

console.log(err);

});