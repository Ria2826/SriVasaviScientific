"use client";

import axios from "axios";
import { useState } from "react";

export default function BookNowModal({
  product,
  closeModal
}: any) {

  const [formData, setFormData] = useState({

    customerName: "",
    email: "",
    phone: "",
    company: "",
    message: ""

  });

  async function submitEnquiry() {

    try {

      await axios.post(
        "http://localhost:5000/api/enquiries",
        {
          ...formData,
          productName: product.productName
        }
      );

      alert("Enquiry submitted successfully");

      closeModal();

    }

    catch(error){

      console.log(error);

      alert("Error sending enquiry");

    }

  }

  return (

    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

      <div className="bg-white w-[500px] rounded-3xl p-8">

        <h2 className="text-3xl font-bold">

          Book Product

        </h2>

        <p className="mt-2 text-gray-500">

          Product: {product.productName}

        </p>

        <input
          placeholder="Full Name"
          className="w-full border p-3 rounded-xl mt-6"
          onChange={(e)=>
          setFormData({
            ...formData,
            customerName:e.target.value
          })}
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-xl mt-3"
          onChange={(e)=>
          setFormData({
            ...formData,
            email:e.target.value
          })}
        />

        <input
          placeholder="Phone Number"
          className="w-full border p-3 rounded-xl mt-3"
          onChange={(e)=>
          setFormData({
            ...formData,
            phone:e.target.value
          })}
        />

        <input
          placeholder="Company Name"
          className="w-full border p-3 rounded-xl mt-3"
          onChange={(e)=>
          setFormData({
            ...formData,
            company:e.target.value
          })}
        />

        <textarea
          placeholder="Message"
          className="w-full border p-3 rounded-xl mt-3"
          onChange={(e)=>
          setFormData({
            ...formData,
            message:e.target.value
          })}
        />

        <div className="flex gap-4 mt-6">

          <button
            onClick={submitEnquiry}
            className="bg-blue-700 text-white px-6 py-3 rounded-xl flex-1"
          >
            Submit
          </button>

          <button
            onClick={closeModal}
            className="bg-gray-300 px-6 py-3 rounded-xl flex-1"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );
}