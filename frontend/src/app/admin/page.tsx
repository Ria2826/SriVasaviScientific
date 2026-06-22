"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminDashboard() {

const [products,setProducts]=useState([]);
const [enquiries,setEnquiries]=useState([]);

async function loadData(){

try{

const productRes=
await axios.get(
"http://localhost:5000/api/products"
);

const enquiryRes=
await axios.get(
"http://localhost:5000/api/enquiries"
);

setProducts(
productRes.data.data || productRes.data
);

setEnquiries(
enquiryRes.data.data || enquiryRes.data
);

}
catch(error){

console.log(error);
}

}

useEffect(()=>{

loadData();

},[]);

return(

<div className="min-h-screen bg-slate-100 p-8">

<h1 className="text-4xl font-bold">

SVSS Admin Dashboard
</h1>

<p className="text-gray-500 mt-2">
Manage products and customer enquiries
</p>


<div className="grid md:grid-cols-3 gap-6 mt-10">

<div className="bg-white rounded-3xl p-8 shadow">

<h2 className="text-gray-500">
Products
</h2>

<h1 className="text-5xl font-bold mt-3">
{products.length}
</h1>

</div>


<div className="bg-white rounded-3xl p-8 shadow">

<h2 className="text-gray-500">
Enquiries
</h2>

<h1 className="text-5xl font-bold mt-3">
{enquiries.length}
</h1>

</div>


<div className="bg-white rounded-3xl p-8 shadow">

<h2 className="text-gray-500">
Customers
</h2>

<h1 className="text-5xl font-bold mt-3">
{enquiries.length}
</h1>

</div>

</div>


<div className="bg-white rounded-3xl p-8 shadow mt-10">

<h2 className="text-2xl font-bold">

Recent Enquiries

</h2>

<div className="mt-5 space-y-5">

{enquiries.slice(0,5).map(
(item:any)=>(

<div
key={item._id}
className="border-b pb-4"
>

<h3 className="font-bold">

{item.customerName}

</h3>

<p className="text-gray-500">

{item.productName}

</p>

</div>

)

)}

</div>

</div>

</div>

)

}