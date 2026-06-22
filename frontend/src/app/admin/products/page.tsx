"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProductsPage() {

const [products,setProducts]=useState<any[]>([]);
const [search,setSearch]=useState("");

useEffect(()=>{

fetch("http://localhost:5000/api/products")
.then((res)=>res.json())
.then((data)=>setProducts(data));

},[]);

const filteredProducts=products.filter((product)=>

product.productName
?.toLowerCase()
.includes(search.toLowerCase())

||

product.casNo
?.toLowerCase()
.includes(search.toLowerCase())

||

product.category
?.toLowerCase()
.includes(search.toLowerCase())

);

return(

<>

<Navbar/>

<div className="min-h-screen bg-slate-100">

{/* Banner */}

<div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-16">

<div className="max-w-7xl mx-auto px-8">

<h1 className="text-5xl font-bold">

Our Products

</h1>

<p className="mt-4 text-lg">

Browse laboratory chemicals, pharmaceutical intermediates,
bio-chemicals and scientific products

</p>

</div>

</div>


<div className="max-w-7xl mx-auto px-8 py-12">

{/* Search */}

<input

type="text"

placeholder="Search by Product Name / CAS No / Category"

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="w-full p-5 rounded-2xl border shadow mb-10 outline-none"

/>



<div className="bg-white rounded-3xl shadow-xl overflow-hidden">

<div className="bg-blue-700 text-white p-6">

<h2 className="text-2xl font-bold">

Chemical Product Catalogue

</h2>

</div>


<div className="overflow-x-auto">

<table className="w-full">

<thead>

<tr className="bg-blue-100 text-left">

<th className="p-5">

Category

</th>

<th className="p-5">

Product Name

</th>

<th className="p-5">

CAS No

</th>

<th className="p-5">

Grade

</th>

<th className="p-5">

Quantity

</th>

<th className="p-5">

Price

</th>

<th className="p-5">

Action

</th>

</tr>

</thead>


<tbody>

{filteredProducts.map((product,index)=>(

<tr
key={product._id}
className={`border-b hover:bg-blue-50

${index%2===0
?"bg-white"
:"bg-slate-50"
}`}

>

<td className="p-5">

{product.category}

</td>

<td className="p-5 font-semibold">

{product.productName}

</td>

<td className="p-5">

{product.casNo}

</td>

<td className="p-5">

{product.grade}

</td>

<td className="p-5">

{product.quantity}

</td>

<td className="p-5 text-blue-700 font-bold">

₹{product.price}

</td>

<td className="p-5">

<Link
href={`/products/${product._id}`}
>

<button
className="bg-blue-700 text-white px-5 py-2 rounded-xl hover:bg-blue-900"
>

View

</button>

</Link>

</td>

</tr>

))}

</tbody>

</table>

</div>


{filteredProducts.length===0 && (

<div className="text-center py-10 text-gray-500">

No products found

</div>

)}

</div>

</div>

</div>

<Footer/>

</>

)

}