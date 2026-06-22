"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Dr. Rajesh Kumar",
      company: "Pharmaceutical Research Labs",
      review: "Excellent quality materials and timely support."
    },
    {
      name: "Dr. Priya Sharma",
      company: "Biotech Innovations",
      review: "Outstanding technical expertise."
    },
    {
      name: "Dr. Michael Wilson",
      company: "Global Research Solutions",
      review: "Reliable supply chain and excellent service."
    },
    {
      name: "Dr. Sarah Johnson",
      company: "Advanced Biotech",
      review: "Great experience working with SVSS."
    },
    {
      name: "Dr. James Carter",
      company: "Research Institute",
      review: "Fast delivery and quality products."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-cyan-100">

      <div className="container mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold">
            What Our Clients Say
          </h2>

        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          observer={true}
          observeParents={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          {reviews.map((item,index)=>(
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-xl p-8 h-[250px]">

                <div className="text-yellow-500">
                  ⭐⭐⭐⭐
                </div>

                <p className="mt-5 italic">
                  "{item.review}"
                </p>

                <div className="mt-8">
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-gray-500">
                    {item.company}
                  </p>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}