import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-cyan-50 to-blue-100 py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>

            <h2 className="text-2xl font-bold text-blue-900">
              Sri Vasavi Scientific Solutions
            </h2>

            <p className="mt-4 text-slate-600">
              Delivering innovative scientific products,
              CRO/CDMO services and specialty chemical
              solutions worldwide.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-lg text-slate-900">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-600">

              <Link href="/">Home</Link>
              <Link href="/">Products</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg text-slate-900">
              Services
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-slate-600">

              <p>CRO Projects</p>
              <p>CDMO Projects</p>
              <p>Research Solutions</p>
              <p>Specialty Chemicals</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold text-lg text-slate-900">
              Contact
            </h3>

            <div className="mt-4 text-slate-600">

              <p>📧 rkdpm84@gmail.com</p>
              <p className="mt-2">📞 +91 73383 18012</p>
              <div>

<h2 className="font-bold text-lg">

Address

</h2>

<p className="mt-4 text-gray-600">

SRI VASAVI SCIENTIFIC SOLUTIONS

<br/>

Dr.Ambedkar Industrial Estate

<br/>

S.M.48, Jigani, Anekal

<br/>

Bengaluru, Karnataka 560105

</p>

</div>

            </div>

          </div>

        </div>

        <div className="border-t border-blue-200 mt-12 pt-6 text-center text-slate-600">

          © 2019 Sri Vasavi Scientific Solutions. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}