import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="SVSS Logo"
            className="h-12 w-auto"
          />

          <span className="font-bold text-lg md:text-xl text-blue-900">
            Sri Vasavi Scientific Solutions
          </span>

        </Link>

        <div className="flex items-center gap-8">

          <Link
            href="/"
            className="text-slate-700 hover:text-blue-700"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-slate-700 hover:text-blue-700"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-slate-700 hover:text-blue-700"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-slate-700 hover:text-blue-700"
          >
            Contact
          </Link>

          <span className="text-xs font-semibold tracking-wider text-blue-900">
            EST. 2019
          </span>

        </div>

      </div>
    </nav>
  );
}