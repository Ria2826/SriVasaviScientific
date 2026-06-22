"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function ProductsSection() {

const products=[

{
title:"Laboratory Chemicals",
desc:"High-purity analytical and industrial chemicals."
},

{
title:"Scientific Instruments",
desc:"Advanced laboratory and research instruments."
},

{
title:"Glassware",
desc:"Premium laboratory glassware."
},

{
title:"Research Reagents",
desc:"Specialized reagents for research."
},

{
title:"Herbal Extracts",
desc:"Premium botanical extracts."
},

{
title:"Cosmeceutical Chemicals",
desc:"Advanced cosmetic ingredients."
},

{
title:"Pharmaceutical Excipients",
desc:"High quality formulation excipients."
},

{
title:"Pharmaceutical Intermediates",
desc:"Reliable intermediates."
},

{
title:"Reference Impurities",
desc:"Certified impurity standards."
},

{
title:"Oligo Chemicals",
desc:"Molecular research chemicals."
},

{
title:"Peptide Chemicals",
desc:"Synthetic peptide compounds."
},

{
title:"CRO & CDMO Projects",
desc:"Contract research services."
}

];

return(

<section className="py-24 bg-white">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center text-blue-950">
Our Products
</h2>

<p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto">

Delivering high-quality laboratory chemicals,
scientific instruments, pharmaceutical materials,
research reagents and specialty products worldwide.

</p>
<div className="mt-16">

<Swiper
modules={[Autoplay,Pagination]}
spaceBetween={30}
slidesPerView={1}
pagination={{clickable:true}}
autoplay={{
delay:3000
}}
breakpoints={{

768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}

}}
>

{products.map((product,index)=>(

<SwiperSlide key={index}>

<Link
href={`/products?search=${encodeURIComponent(product.title)}`}
>

<div className="bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 rounded-3xl p-8 h-72 border border-cyan-300 shadow-xl hover:scale-105 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer">

<h3 className="text-white text-2xl font-bold">

{product.title}

</h3>

<p className="text-blue-100 mt-4 leading-7">

{product.desc}

</p>

</div>

</Link>

</SwiperSlide>

))}

</Swiper>

</div>

</div>

</section>

)

}