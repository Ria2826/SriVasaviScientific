import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">

        {/* Hero Section */}
        <section
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-transparent" />

          {/* Hero Content */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">

              <div className="max-w-3xl">

                <h1 className="text-white font-extrabold leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  Sri Vasavi
                  <br />
                  Scientific Solutions
                </h1>

                <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                  Delivering high-quality laboratory chemicals,
                  scientific instruments, reagents and industrial
                  research solutions across India.
                </p>

                <div className="flex flex-wrap gap-4 mt-8">

                  <Link href="/products">
                   <button className="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-gray-100 transition">
                         Explore Products
                  </button>
                  </Link>

                  <Link href="/contact">
                   <button className="bg-white text-blue-700 px-8 py-4 rounded-full hover:bg-gray-100 transition">
                         Contact Us
                  </button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-10 md:gap-16 mt-14">

                  <div>
                    <h2 className="text-white text-4xl font-bold">
                      500+
                    </h2>
                    <p className="text-gray-300">
                      Products
                    </p>
                  </div>

                  <div>
                    <h2 className="text-white text-4xl font-bold">
                      100+
                    </h2>
                    <p className="text-gray-300">
                      Clients
                    </p>
                  </div>

                  <div>
                    <h2 className="text-white text-4xl font-bold">
                      7+
                    </h2>
                    <p className="text-gray-300">
                      Years Experience
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Products Section */}
        <ProductsSection />

        <AboutSection />

        <WhyChooseUs />

        <IndustriesSection />

        <ReviewsSection />

        <ContactSection />

        <Footer />

      </main>
    </>
  );
}