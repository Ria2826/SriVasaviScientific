"use client";

import { useState } from "react";

export default function LoginPage() {

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const login=async()=>{

try{

const response=await fetch(
"http://localhost:5000/api/auth/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
);

const data=await response.json();

console.log(data);

if(data.success){

localStorage.setItem(
"token",
data.token
);

window.location.href=
"/admin/upload";

}else{

alert(
data.message || "Wrong email or password"
);

}

}
catch(error){

console.log(error);
alert("Login failed");

}

};

return(

<div className="min-h-screen flex items-center justify-center bg-slate-100">

<div className="bg-white p-10 rounded-3xl shadow-lg w-[500px]">

<h1 className="text-3xl font-bold text-center mb-8">

Admin Login

</h1>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="border p-4 rounded-xl w-full mb-5"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="border p-4 rounded-xl w-full mb-5"
/>

<button
onClick={login}
className="bg-blue-700 text-white w-full py-4 rounded-xl"
>

Login

</button>

<div className="text-center mt-6 text-gray-500">

Email: rkdpm84@gmail.com<br/>
Password: krish123

</div>

</div>

</div>

);

}