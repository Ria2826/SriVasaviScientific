"use client";

import axios from "axios";
import { useEffect,useState } from "react";

export default function ManageProducts(){

const [products,setProducts]=useState([]);

async function loadProducts(){

const response=
await axios.get(
"http://localhost:5000/api/products"
);

setProducts(response.data);

}

useEffect(()=>{

loadProducts();

},[]);


async function deleteProduct(id:string){

const confirmDelete=
confirm(
"Delete this product?"
);

if(!confirmDelete) return;

await axios.delete(

`http://localhost:5000/api/products/${id}`

);

loadProducts();

}


return(

<div className="min-h-screen bg-slate-100 p-10">

<h1 className="text-4xl font-bold">

Manage Products

</h1>


<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

{products.map((product:any)=>(

<div
key={product._id}
className="
bg-white
rounded-3xl
shadow-xl
overflow-hidden
"
>

<img
src={product.image}
className="
w-full
h-52
object-cover
"
/>

<div className="p-6">

<h2
className="
text-2xl
font-bold
"
>

{product.productName}

</h2>

<p>

CAS:
{product.casNo}

</p>

<p>

₹ {product.price}

</p>

<div
className="
flex
gap-3
mt-5
"
>

<button
className="
bg-blue-700
text-white
px-5
py-2
rounded-xl
"
>

Edit

</button>


<button
onClick={()=>
deleteProduct(
product._id
)
}
className="
bg-red-600
text-white
px-5
py-2
rounded-xl
"
>

Delete

</button>

</div>

</div>

</div>

))}

</div>

</div>

)

}