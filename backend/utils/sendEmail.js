const nodemailer=require("nodemailer");

async function sendEmail(data){

try{

const transporter=
nodemailer.createTransport({

service:"gmail",

auth:{

user:process.env.EMAIL_USER,
pass:process.env.EMAIL_PASS

}

});

console.log(
"Sending email..."
);

const info=
await transporter.sendMail({

from:process.env.EMAIL_USER,

to:process.env.EMAIL_USER,

subject:`SVSS Enquiry: ${data.productName}`,

html:`

<h2>New Product Enquiry</h2>

<p>Name: ${data.customerName}</p>

<p>Email: ${data.email}</p>

<p>Phone: ${data.phone}</p>

<p>Product: ${data.productName}</p>

<p>Message: ${data.message}</p>

`

});

console.log(
"Email sent:"
);

console.log(
info.response
);

}

catch(error){

console.log(
"EMAIL ERROR:"
);

console.log(
error
);

}

}

module.exports=
sendEmail;