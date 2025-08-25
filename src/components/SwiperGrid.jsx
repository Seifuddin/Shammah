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
      caption: "Pastor blessing members with motorbikes for daily life and ministry.",
      link: "/blog/gift-of-mobility",
    },
    {
      img: "/images/1754934116763.jpg",
      title: "Empowering Lives",
      caption: "Each motorbike empowers families and strengthens the church community.",
      link: "/blog/empowering-lives",
    },
    {
      img: "/images/1754934148006.jpg",
      title: "Blessings on Wheels",
      caption: "A testimony of generosity bringing joy and hope to many.",
      link: "/blog/blessings-on-wheels",
    },
  ],
];


export default function SwiperGrid() {
  return (
    <div className="space-y-12 mx-auto bg-gray-100 py-16 px-4">
      {/* Title + Subtitle */}
      <div className="text-center max-w-2xl mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
          Blessings on Wheels
        </h2>
        <p className="text-lg text-gray-600">
          A journey of generosity — gifting motorbikes to empower lives and ministry.
        </p>
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
              <Link href={item.link}>
                <div className="bg-white rounded-md shadow hover:shadow-lg transition duration-300 overflow-hidden">
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
                    <div className="gap-4 mt-6">
                                <Link
                                  a href="/visit"
                                  className="bg-blue-900 text-white text-center py-1 px-6 rounded hover:bg-red-800 transition transform hover:scale-105 shadow-lg"
                                >
                                  Learn More
                                </Link>
                              </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </div>
  );
}
