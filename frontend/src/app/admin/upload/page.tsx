"use client";

import { useState, useEffect } from "react";

export default function UploadPage(){

const [file,setFile]=useState<File|null>(null);
const [loading,setLoading]=useState(false);

useEffect(()=>{

const token=
localStorage.getItem("token");

if(!token){

window.location.href="/login";

}

},[]);


const uploadFile=async()=>{

if(!file){

alert("Please select a file");
return;

}

try{

setLoading(true);

const formData=
new FormData();

formData.append(
"file",
file
);

const response=
await fetch(
"http://localhost:5000/api/excel/upload",
{
method:"POST",
body:formData
}
);

const data=
await response.json();

if(data.success){

alert(data.message);

}
else{

alert(data.message);

}

}
catch(error){

console.log(error);

alert("Upload failed");

}
finally{

setLoading(false);

}

};


return(

<div className="min-h-screen bg-slate-100 flex justify-center items-center">

<div className="bg-white p-10 rounded-3xl shadow-xl w-[700px]">

<h1 className="text-3xl font-bold mb-6">

Upload Product File

</h1>

<p className="text-gray-500 mb-6">

Upload Excel (.xlsx/.xls) or CSV file

</p>

<input
type="file"
accept=".xlsx,.xls,.csv"
onChange={(e)=>{

if(e.target.files){

setFile(
e.target.files[0]
);

}

}}
className="mb-6"
/>

<button
onClick={uploadFile}
disabled={loading}
className="w-full bg-blue-700 text-white py-4 rounded-xl hover:bg-blue-900"
>

{loading
? "Uploading..."
: "Upload Products"}

</button>

</div>

</div>

)

}