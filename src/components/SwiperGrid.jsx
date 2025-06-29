"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const imageGroups = [
  [
    {
      img: "/images/pexels-pixabay-268533.jpg",
      title: "Sunday Worship",
      caption: "Spirit-filled worship and praise every Sunday.",
      link: "/blog/sunday-worship",
    },
    {
      img: "/images/pexels-pixabay-268533.jpg",
      title: "Bible Study Tuesdays",
      caption: "Dig deeper into God's Word together.",
      link: "/blog/bible-study",
    },
    {
      img: "/images/pexels-pixabay-268533.jpg",
      title: "Youth Ministry",
      caption: "Empowering the next generation for Christ.",
      link: "/blog/youth-ministry",
    },
  ],
  [
    {
      img: "/images/pexels-pixabay-268533.jpg",
      title: "Choir Rehearsals",
      caption: "Lifting hearts through gospel music.",
      link: "/blog/choir-team",
    },
    {
      img: "/images/pexels-pixabay-268533.jpg",
      title: "Community Outreach",
      caption: "Shammah in action—spreading love and hope.",
      link: "/blog/community-outreach",
    },
    {
      img: "/images/pexels-pixabay-268533.jpg",
      title: "Women's Fellowship",
      caption: "Building strong women of faith.",
      link: "/blog/womens-fellowship",
    },
  ],
];

export default function SwiperGrid() {
  return (
    <div className="space-y-8 px-4">
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
          className="rounded-lg"
        >
          {group.map((item, i) => (
            <SwiperSlide key={i}>
              <Link href={item.link}>
                <div className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.caption}</p>
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
