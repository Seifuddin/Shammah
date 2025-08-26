"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Mwangi",
    role: "Volunteer",
    message:
      "Being part of this feeding mission has changed my life. Seeing children smile after a meal fills my heart with joy.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "John Kamau",
    role: "Orphanage Director",
    message:
      "This ministry has been a lifeline for us. With their support, we can focus on raising and educating the children.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "Muriithi Nguru",
    role: "Donor",
    message:
      "I am grateful to contribute to this cause. It’s amazing to see the direct impact of my giving on children’s lives.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "Grace Wanjiru",
    role: "Community Member",
    message:
      "The love and care I’ve experienced through this ministry have transformed my family’s life.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "Peter Otieno",
    role: "Pastor",
    message:
      "This is more than just a mission — it’s God’s love in action. I’m humbled to witness lives changing.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "Lucy Njeri",
    role: "Teacher",
    message:
      "The support given to the children not only feeds them but gives them hope and motivation to learn and dream big.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "Samuel Karanja",
    role: "Youth Leader",
    message:
      "Partnering with this ministry has been inspiring. The transformation in young people’s lives is truly remarkable.",
    image: "/images/1754123368741.jpg",
  },
  {
    name: "Mary Atieno",
    role: "Beneficiary",
    message:
      "I never imagined my children would have such an opportunity. This ministry has given us dignity and a future.",
    image: "/images/1754123368741.jpg",
  },
];

export default function Testimonys() {
  return (
    <section className="w-full bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ❤️ What People Say About Us
        </motion.h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white px-8 py-10 rounded-md shadow-lg border border-gray-100 h-full flex flex-col items-center"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={90}
                  height={90}
                  className="rounded-full border-2 border-red-700 mb-5 object-cover"
                />
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                  “{t.message}”
                </p>
                <h3 className="font-semibold text-xl text-blue-900">
                  {t.name}
                </h3>
                <span className="text-sm text-gray-500 tracking-wide uppercase">
                  {t.role}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
