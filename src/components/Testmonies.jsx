"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mwangi",
    role: "Volunteer",
    message:
      "Being part of this feeding mission has changed my life. Seeing children smile after a meal fills my heart with joy.",
    image: "/images/1754123368741b.jpg",
  },
  {
    name: "John Kamau",
    role: "Orphanage Director",
    message:
      "This ministry has been a lifeline for us. With their support, we can focus on raising and educating the children.",
    image: "/images/1754123377568.jpg",
  },
  {
    name: "Muriithi Nguru",
    role: "Donor",
    message:
      "I am grateful to contribute to this cause. It’s amazing to see the direct impact of my giving on children’s lives.",
    image: "/images/IMG_20221028_140830_410.jpg",
  },
];

export default function Testimonys() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((current + 1) % testimonials.length);

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-red-700 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ❤️ What People Say About Us
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <div className="flex flex-col items-center">
              <Image
                src={testimonials[current].image}
                alt={testimonials[current].name}
                width={80}
                height={80}
                className="rounded-full border-4 border-red-600 mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                “{testimonials[current].message}”
              </p>
              <h3 className="font-semibold text-lg text-blue-900">
                {testimonials[current].name}
              </h3>
              <span className="text-sm text-gray-500">
                {testimonials[current].role}
              </span>
            </div>
          </motion.div>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
