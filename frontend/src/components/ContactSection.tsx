"use client";

import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log(formData);

    alert("Enquiry submitted successfully");
  };

  return (
    <section className="py-28 bg-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Send an Enquiry
          </h2>

          <p className="mt-4 text-gray-600">
            Connect with our scientific team for products,
            CRO/CDMO services and research support.
          </p>

        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="bg-blue-950 text-white rounded-3xl p-10">

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <div className="space-y-6 mt-8">

              <div>
                <p className="font-bold">
                  Email
                </p>

                <p>
                  rkdpm84@gmail.com

                </p>
              </div>

              <div>
                <p className="font-bold">
                  Phone
                </p>

                <p>
                  +91 7338318012 / 9449156649
                </p>
              </div>

              <div>
                <p className="font-bold">
                  Location
                </p>

                <p>
                  India
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl shadow-xl"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl mb-5"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl mb-5"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full border p-4 rounded-xl mb-5"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              onChange={handleChange}
              className="w-full border p-4 rounded-xl mb-5"
            />

            <button
              className="w-full bg-blue-700 text-white p-4 rounded-xl hover:bg-blue-900"
            >
              Submit Enquiry
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}