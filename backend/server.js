require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const productAutoFetch=require("./routes/productAutoFetch");
const uploadFile=
require("./routes/uploadFile");
// Middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));



// ===== MongoDB Connection =====

mongoose
.connect(process.env.MONGO_URI)
.then(() => {

console.log("MongoDB Connected Successfully");

})
.catch((err) => {

console.log(
"Mongo Connection Error:",
err.message
);

});




// ===== Routes =====

const authRoutes =
require("./routes/authRoutes");

const productRoutes =
require("./routes/productRoutes");

const enquiryRoutes =
require("./routes/enquiryRoutes");

const excelUploadRoutes =
require("./routes/excelUploadRoutes");


// API Routes

app.use(
"/api/auth",
authRoutes
);

app.use(
"/api/products",
productRoutes
);

app.use(
"/api/enquiry",
enquiryRoutes
);

app.use(
"/api/excel",
excelUploadRoutes
);
app.use(
"/api/products",
uploadFile
);
app.use("/api/products",productAutoFetch);

// Default route

app.get("/", (req,res)=>{

res.send(
"Sri Vasavi Scientific Backend Running"
);

});



// Error Handler

app.use((err,req,res,next)=>{

console.log(err.stack);

res.status(500).json({

success:false,

message:
"Internal Server Error"

});

});




// Server Start

const PORT =
process.env.PORT || 5000;

app.listen(PORT,()=>{

console.log(

`Server running on ${PORT}`

);

});