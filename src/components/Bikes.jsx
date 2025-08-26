"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const imageGroups = [
  [
    {
      img: "/images/1754934102013.jpg",
      title: "A Gift of Mobility",
      caption:
        "Pastor blessing members with motorbikes for daily life and ministry.",
    },
    {
      img: "/images/1754934116763.jpg",
      title: "Empowering Lives",
      caption:
        "Each motorbike empowers families and strengthens the church community.",
    },
    {
      img: "/images/1754934148006.jpg",
      title: "Blessings on Wheels",
      caption:
        "A testimony of generosity bringing joy and hope to many.",
    },
  ],
];

export default function Bikes() {
  return (
    <div className="space-y-12 mx-auto bg-gray-100 py-16 px-4">
      {/* Title + Subtitle */}
      <div className="text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-red-700 mb-4"
        >
          Blessings on Wheels
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600"
        >
          A journey of generosity — gifting motorbikes to empower lives and
          ministry.
        </motion.p>
      </div>

      {imageGroups.map((group, index) => (
        <Swiper
          key={index}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1.2}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="rounded-lg container"
        >
          {group.map((item, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 md:h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.caption}</p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    <Link
                      href="/visit"
                      className="bg-blue-900 text-white text-center py-1 px-6 rounded hover:bg-red-800 transition transform hover:scale-105 shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
}
