import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
export default function About(){

return(

<>

<Navbar/>

<div className="bg-slate-50">

<section className="bg-gradient-to-r from-blue-950 via-blue-800 to-cyan-700 text-white py-32">

<div className="max-w-7xl mx-auto px-8 text-center">

<h1 className="text-6xl font-extrabold">

About Sri Vasavi Scientific Solutions

</h1>

<p className="mt-8 text-xl max-w-4xl mx-auto leading-9">

Sri Vasavi Scientific Solutions delivers
high-quality laboratory chemicals,
research reagents, pharmaceutical materials,
herbal extracts, peptide chemicals,
CRO/CDMO services and scientific products
worldwide.

</p>

</div>

</section>



<section className="max-w-7xl mx-auto px-8 py-24">

<div className="grid md:grid-cols-2 gap-14 items-center">

<div>

<h2 className="text-5xl font-bold">

Who We Are

</h2>

<p className="mt-8 text-gray-600 leading-8">

Sri Vasavi Scientific Solutions was established
to provide premium scientific and pharmaceutical
solutions for academic research institutions,
biotechnology companies, laboratories and industries.

We are committed to innovation, reliability,
quality assurance and worldwide customer support.

</p>

</div>

<div>

<img
src="/about.jpeg"
alt="lab"
className="rounded-3xl shadow-2xl"
/>

</div>

</div>

</section>



<section className="bg-blue-50 py-20">

<div className="max-w-7xl mx-auto px-8">

<div className="grid md:grid-cols-4 gap-8">

{[
["500+","Products"],
["100+","Clients"],
["15+","Countries Served"],
["24/7","Support"]
].map((item,index)=>(

<div
key={index}
className="bg-white rounded-3xl p-8 shadow-xl text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
>

<h2 className="text-5xl font-bold text-blue-700">

{item[0]}

</h2>

<p className="mt-3">

{item[1]}

</p>

</div>

))}

</div>

</div>

</section>



<section className="py-24">

<div className="max-w-7xl mx-auto px-8">

<div className="grid md:grid-cols-2 gap-10">

<div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

<h2 className="text-4xl font-bold text-blue-700">

Our Mission

</h2>

<p className="mt-6 text-gray-600 leading-8">

To provide high-quality scientific products
and innovative solutions supporting research,
pharmaceutical and biotechnology advancement.

</p>

</div>


<div className="bg-white p-10 rounded-3xl shadow-xl hover:scale-105 hover:-translate-y-3 hover:shadow-2xl transition-all duration-500">

<h2 className="text-4xl font-bold text-cyan-700">

Our Vision

</h2>

<p className="mt-6 text-gray-600 leading-8">

To become a globally trusted scientific partner
known for innovation, quality and excellence.

</p>

</div>

</div>

</div>

</section>



<section className="bg-slate-100 py-24">

<div className="max-w-7xl mx-auto px-8">

<h1 className="text-center text-5xl font-bold">

Industries We Serve

</h1>

<div className="grid md:grid-cols-3 gap-8 mt-16">

{[
"Pharmaceutical Industry",
"Biotechnology",
"Academic Research",
"Healthcare",
"Chemical Manufacturing",
"Scientific Laboratories"
].map((item,index)=>(

<div
key={index}
className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 hover:shadow-2xl transition"
>

{item}

</div>

))}

</div>

</div>

</section>



<section className="bg-gradient-to-r from-blue-900 to-cyan-700 py-24 text-white">

<div className="text-center">

<h1 className="text-5xl font-bold">

Partner With Us

</h1>

<p className="mt-6 text-xl">

Delivering reliable scientific products
and research solutions worldwide.

</p>

<Link href="/contact">

<button className="bg-white text-blue-900 px-8 py-4 rounded-xl mt-10 hover:scale-110 transition">

Contact Us

</button>

</Link>

</div>

</section>

</div>

<Footer/>

</>

)

}