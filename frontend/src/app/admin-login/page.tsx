"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin(){

const router=
useRouter();

const [email,setEmail]=
useState("");

const [password,setPassword]=
useState("");

async function login(){

try{

const response=
await axios.post(

"http://localhost:5000/api/auth/login",

{
email,
password
}

);
document.cookie=
`token=${response.data.token}; path=/`;

router.push(
"/admin"
);

}

catch{

alert(
"Login Failed"
);

}

}

return(

<div className="min-h-screen flex justify-center items-center bg-slate-100">

<div className="bg-white p-10 rounded-3xl shadow w-[450px]">

<h1 className="text-4xl font-bold">

Admin Login

</h1>

<input
placeholder="Email"
className="w-full border p-4 rounded-xl mt-6"
onChange={(e)=>
setEmail(
e.target.value
)
}
/>

<input
type="password"
placeholder="Password"
className="w-full border p-4 rounded-xl mt-4"
onChange={(e)=>
setPassword(
e.target.value
)
}
/>

<button
onClick={login}
className="
w-full
bg-blue-700
text-white
p-4
rounded-xl
mt-6
"
>

Login

</button>

</div>

</div>

)

}