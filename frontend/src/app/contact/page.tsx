import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact(){

return(

<>

<Navbar/>

<div className="bg-blue-50 min-h-screen">

<div className="max-w-7xl mx-auto py-20 px-8">

<h1 className="text-5xl font-bold text-center">

Contact Us

</h1>

<div className="grid md:grid-cols-2 gap-10 mt-16">

<div className="bg-white p-8 rounded-3xl shadow">

<h2 className="text-2xl font-bold">

Contact Information

</h2>

<p className="mt-6">

SRI VASAVI SCIENTIFIC SOLUTIONS

</p>

<p>

Dr.Ambedkar Industrial Estate

</p>

<p>

S.M.48, Jigani, Anekal

</p>

<p>

Bengaluru, Karnataka 560105

</p>

<p className="mt-5">

📧 rkdpm84@gmail.com

</p>

<p>

🌍 Worldwide Supply

</p>

</div>


<div className="rounded-3xl overflow-hidden shadow">

<iframe
src="https://maps.google.com/maps?q=SRI%20VASAVI%20SCIENTIFIC%20SOLUTIONS%20Dr.Ambedkar%20Industrial%20Estate%20S.M.48%20Jigani%20Anekal%20Bengaluru%20Karnataka%20560105&t=&z=17&ie=UTF8&iwloc=&output=embed"
className="w-full h-[450px]"
/>

</div>

</div>

</div>

</div>

<Footer/>

</>

)

}