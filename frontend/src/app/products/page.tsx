"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Categories matching Home Page

 const categories=[

"All Products",

...Array.from(
new Set(
products
.map(
(item:any)=>item.category
)
.filter(Boolean)
)
)

];
  const filteredProducts = products.filter((product) => {

const searchText = search.trim().toLowerCase();

const productName =
(product.productName || "")
.toString()
.toLowerCase();

const casNo =
(product.casNo || "")
.toString()
.toLowerCase();

const category =
(product.category || "")
.toString()
.toLowerCase();


const matchesSearch =

productName.includes(searchText)

||

casNo.includes(searchText)

||

category.includes(searchText);


const matchesCategory =

selectedCategory==="All Products"

||

(product.category || "").trim()
===selectedCategory.trim();

return matchesSearch && matchesCategory;

});
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-100">

        {/* Banner */}

        <div
          className="relative h-[350px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center px-6">

            <div>

              <h1 className="text-6xl font-bold text-white mb-4">

                Our Products

              </h1>

              <p className="text-xl text-gray-200">

                High quality chemicals, pharmaceutical ingredients
                and laboratory products

              </p>

            </div>

          </div>

        </div>

        <div className="max-w-7xl mx-auto px-8 py-10">

          {/* Search */}

          <input
            type="text"
            placeholder="Search Product Name / CAS No"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-xl border shadow-lg outline-none mb-10"
          />

          {/* Categories */}

          <div className="mb-10">

            <h2 className="text-3xl font-bold mb-6">

              Browse Categories

            </h2>

            <div className="flex flex-wrap gap-4">

              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                  className={`px-5 py-3 rounded-full font-medium transition-all

                  ${
                    selectedCategory === category
                      ? "bg-blue-700 text-white"
                      : "bg-white shadow hover:bg-blue-100"
                  }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>

          {/* Product Table */}

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

            <div className="bg-blue-700 p-5 text-white">

              <h2 className="text-2xl font-bold">

                Product Catalogue

              </h2>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>

                  <tr className="bg-blue-100">

                    <th className="p-5 text-left">
                      Product Name
                    </th>

                    <th className="p-5 text-left">
                      CAS No
                    </th>

                    <th className="p-5 text-left">
                      Category
                    </th>

                    <th className="p-5 text-left">
                      Grade
                    </th>

                    <th className="p-5 text-left">
                      Quantity
                    </th>

                    <th className="p-5 text-left">
                      Price
                    </th>

                    <th className="p-5 text-center">
                      Action
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {filteredProducts.map(
                    (product, index) => (

                      <tr
                        key={product._id}
                        className={`border-b hover:bg-blue-50

                        ${
                          index % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50"
                        }`}
                      >

                        <td className="p-5 font-semibold">
                          {product.productName}
                        </td>

                        <td className="p-5">
                          {product.casNo}
                        </td>

                        <td className="p-5">
                          {product.category}
                        </td>

                        <td className="p-5">
                          {product.grade}
                        </td>

                        <td className="p-5">
                          {product.quantity}
                        </td>

                        <td className="p-5 font-bold text-blue-700">
                          ₹{product.price}
                        </td>

                        <td className="p-5 text-center">

                          <Link
                            href={`/products/${product._id}`}
                          >

                            <button className="bg-blue-700 px-5 py-2 rounded-lg text-white hover:bg-blue-900">

                              View

                            </button>

                          </Link>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

            {filteredProducts.length===0 && (

              <div className="text-center py-10 text-gray-500">

                No products available

              </div>

            )}

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}