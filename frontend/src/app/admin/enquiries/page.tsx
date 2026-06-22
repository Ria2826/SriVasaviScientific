"use client";

import { useEffect,useState } from "react";
import axios from "axios";

export default function Enquiries(){

const [enquiries,setEnquiries]=useState([]);

async function loadEnquiries(){

try{

const response=
await axios.get(
"http://localhost:5000/api/enquiries"
);

setEnquiries(
response.data.data
);

}

catch(error){

console.log(error);

}

}

useEffect(()=>{

loadEnquiries();

},[]);

return(

<div className="min-h-screen bg-slate-100 p-10">

<h1 className="text-4xl font-bold mb-10">

Customer Enquiries

</h1>

<div className="overflow-auto rounded-3xl shadow-xl">

<table className="w-full bg-white">

<thead className="bg-blue-700 text-white">

<tr>

<th className="p-5">
Customer
</th>

<th className="p-5">
Product
</th>

<th className="p-5">
Email
</th>

<th className="p-5">
Phone
</th>

<th className="p-5">
Message
</th>

</tr>

</thead>

<tbody>

{enquiries.map(
(item:any)=>(

<tr
key={item._id}
className="border-b"
>

<td className="p-5">

{item.customerName}

</td>

<td className="p-5">

{item.productName}

</td>

<td className="p-5">

{item.email}

</td>

<td className="p-5">

{item.phone}

</td>

<td className="p-5">

{item.message}

</td>

</tr>

)

)}

</tbody>

</table>

</div>

</div>

)

}