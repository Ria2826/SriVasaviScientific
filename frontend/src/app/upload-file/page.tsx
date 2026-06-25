"use client";

import {useState} from "react";

export default function UploadFile(){

const [file,setFile]=useState<File | null>(null);

const upload=async()=>{

if(!file){

alert("Select file");
return;

}

const formData=
new FormData();

formData.append(
"file",
file
);

const response=
await fetch(
"https://srivasaviscientific-1.onrender.com/api/products/upload",
{
method:"POST",
body:formData
}
);

const data=
await response.json();

alert(data.message);

};

return(

<div className="flex flex-col items-center p-10">

<h1 className="text-3xl font-bold mb-6">
Upload Products
</h1>

<input
type="file"
accept=".csv,.xlsx,.xls"
onChange={(e)=>
setFile( e.target.files?.[0] || null)
}
/>

<button
onClick={upload}
className="bg-blue-600 text-white px-6 py-3 rounded mt-6"
>

Upload

</button>

</div>

)

}