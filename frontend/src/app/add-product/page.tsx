"use client";

import { useState } from "react";

export default function AddProduct() {
const [product,setProduct]=useState({
productName:"",
casNo:"",
category:"",
grade:"",
quantity:""
});

const handleSubmit=async(e:any)=>{
e.preventDefault();

await fetch(
"https://srivasaviscientific-1.onrender.com/api/products",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(product)
}
);

alert("Product Added Successfully");

setProduct({
productName:"",
casNo:"",
category:"",
grade:"",
quantity:""
});
};

return(

<div className="max-w-xl mx-auto p-8">

<h1 className="text-3xl font-bold mb-8">
Add Product
</h1>

<form
onSubmit={handleSubmit}
className="space-y-4"
>

<input
placeholder="Product Name"
className="border p-3 w-full"
value={product.productName}
onChange={(e)=>
setProduct({
...product,
productName:e.target.value
})
}
/>

<input
placeholder="CAS Number"
className="border p-3 w-full"
value={product.casNo}
onChange={(e)=>
setProduct({
...product,
casNo:e.target.value
})
}
/>

<input
placeholder="Category"
className="border p-3 w-full"
value={product.category}
onChange={(e)=>
setProduct({
...product,
category:e.target.value
})
}
/>

<input
placeholder="Grade"
className="border p-3 w-full"
value={product.grade}
onChange={(e)=>
setProduct({
...product,
grade:e.target.value
})
}
/>

<input
placeholder="Quantity"
className="border p-3 w-full"
value={product.quantity}
onChange={(e)=>
setProduct({
...product,
quantity:e.target.value
})
}
/>

<button
className="bg-blue-600 text-white px-6 py-3 rounded"
>
Add Product
</button>

</form>

</div>

)

}