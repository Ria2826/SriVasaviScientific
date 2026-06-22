"use client";

import Link from "next/link";

export default function Dashboard() {

return (

<div className="min-h-screen bg-slate-100 flex">

{/* Sidebar */}

<div className="w-72 bg-blue-900 text-white p-8">

<h1 className="text-3xl font-bold mb-10">

SVSS Admin
</h1>

<div className="space-y-5">

<Link href="/admin/upload">

<button
className="bg-green-600 text-white px-6 py-3 rounded-xl"
>

Upload Excel

</button>

</Link>


<Link href="/products">

<div className="bg-blue-700 p-4 rounded-xl hover:bg-blue-600 cursor-pointer">

📦 View Products

</div>

</Link>


<Link href="/admin/enquiries">

<div className="bg-blue-700 p-4 rounded-xl hover:bg-blue-600 cursor-pointer">

📩 Enquiries

</div>

</Link>


<Link href="/contact">

<div className="bg-blue-700 p-4 rounded-xl hover:bg-blue-600 cursor-pointer">

👥 Customers

</div>

</Link>


<div
className="bg-red-600 p-4 rounded-xl hover:bg-red-700 cursor-pointer"
onClick={()=>{

localStorage.removeItem("adminToken");
window.location.href="/admin/login"

}}
>

🚪 Logout

</div>

</div>

</div>


{/* Main content */}

<div className="flex-1 p-10">

<h1 className="text-5xl font-bold">

SVSS Admin Dashboard

</h1>

<p className="text-gray-500 mt-2">

Manage products and customer enquiries

</p>


<div className="grid md:grid-cols-3 gap-8 mt-10">

<div className="bg-white p-10 rounded-3xl shadow">

<h2 className="text-gray-500">

Products

</h2>

<h1 className="text-6xl font-bold mt-3">

4

</h1>

</div>


<div className="bg-white p-10 rounded-3xl shadow">

<h2 className="text-gray-500">

Enquiries

</h2>

<h1 className="text-6xl font-bold mt-3">

6

</h1>

</div>


<div className="bg-white p-10 rounded-3xl shadow">

<h2 className="text-gray-500">

Customers

</h2>

<h1 className="text-6xl font-bold mt-3">

6

</h1>

</div>

</div>



<div className="bg-white rounded-3xl shadow p-10 mt-10">

<div className="flex justify-between items-center">

<h2 className="text-3xl font-bold">

Recent Enquiries

</h2>

<Link href="/admin/enquiries">

<button className="bg-blue-700 text-white px-6 py-3 rounded-xl">

View All

</button>

</Link>

</div>


<div className="space-y-6 mt-8">

{[1,2,3,4].map((item)=>(

<div
key={item}
className="border-b pb-5"
>

<h2 className="font-bold text-xl">

Ria

</h2>

<p className="text-gray-600">

Aspirin

</p>

<p className="text-sm text-gray-400">

Requested quotation for pharmaceutical chemical

</p>

</div>

))}

</div>

</div>


<div className="grid md:grid-cols-2 gap-8 mt-10">

<div className="bg-white p-8 rounded-3xl shadow">

<h2 className="font-bold text-2xl">

Quick Actions

</h2>

<div className="space-y-4 mt-6">

<Link href="/admin/add-product">

<button className="w-full bg-blue-700 text-white py-4 rounded-xl">

Add New Product

</button>

</Link>

<button className="w-full bg-green-600 text-white py-4 rounded-xl">

Download Reports

</button>

</div>

</div>



<div className="bg-white p-8 rounded-3xl shadow">

<h2 className="font-bold text-2xl">

Activity

</h2>

<div className="space-y-4 mt-6">

<p>✔ Product Aspirin added</p>

<p>✔ New enquiry received</p>

<p>✔ Customer registered</p>

</div>

</div>

</div>

</div>

</div>

)

}