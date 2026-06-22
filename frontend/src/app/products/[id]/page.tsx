"use client";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductPage() {

const params=useParams();

const [product,setProduct]=useState<any>(null);

const [activeTab,setActiveTab]=useState(
"specifications"
);

useEffect(()=>{

fetchProduct();

},[]);


const fetchProduct=async()=>{

try{

const res=await fetch(

`http://localhost:5000/api/products/${params.id}`

);

const data=await res.json();

setProduct(data);

}
catch(error){

console.log(error);

}

};

if(!product){

return(

<div
className="flex justify-center items-center h-screen"
>

Loading...

</div>

);

}

return (
<>
    <Header />

    <main className="min-h-screen bg-gray-100">

        <div className="max-w-7xl mx-auto px-6 py-12">

            {/* Product Details Card */}

            <div className="bg-white rounded-3xl shadow-lg p-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* LEFT SIDE */}

                    <div>

                        <h1 className="text-5xl font-bold mb-10">
                            {product.productName}
                        </h1>

                        <div className="space-y-6 text-3xl">

                            <p>
                                CAS No :
                                <span className="font-bold">
                                    {product.casNo}
                                </span>
                            </p>

                            <p>
                                Grade :
                                <span className="font-bold">
                                    {product.grade}
                                </span>
                            </p>

                            <p>
                                Quantity :
                                <span className="font-bold">
                                    {product.quantity}
                                </span>
                            </p>

                            <p>
                                Price :
                                <span className="text-blue-600 font-bold">
                                    Contact Owner
                                </span>
                            </p>

                        </div>

                        <div className="flex gap-6 mt-10">

                            <button
                            onClick={()=>{
                                window.location.href=
                                "/contact?product="+
                                product.productName
                            }}
                            className="bg-green-600 text-white px-8 py-4 rounded-xl"
                            >
                                Contact Dealer
                            </button>

                            <button
                            onClick={()=>{

                                const subject=
                                `Quote Request-${product.productName}`

                                window.location.href=
                                `mailto:rkdpm84@gmail.com?subject=${subject}`

                            }}
                            className="bg-blue-600 text-white px-8 py-4 rounded-xl"
                            >
                                Request Quote
                            </button>

                        </div>

                    </div>


                      

                </div>

            </div>


        </div>

    </main>

    <Footer />

</>
)

}