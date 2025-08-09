"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Youth Ministry",
    description:
      "Empowering the next generation with faith, fellowship, and leadership.",
    image: "/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp",
  },
  {
    title: "Women Ministry",
    description:
      "Encouraging and nurturing women to grow spiritually and impact their families.",
    image: "/images/download.jpg",
  },
  {
    title: "Bible Study Groups",
    description:
      "Small group fellowships that dive deeper into the Word of God.",
    image: "/images/61378e9d-082c-42c2-866b-5e2bbe5f61a4_large.webp",
  },
];

export default function Ministry() {
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-100">
      <motion.h2
          className="text-2xl md:text-4xl font-extrabold text-blue-600 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Ministries
        </motion.h2>
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="h-[28rem]">
          <ServiceCard {...services[0]} />
        </div>

        {/* Right Column - Two stacked */}
        <div className="grid grid-rows-2 gap-6 h-[28rem]">
          <ServiceCard {...services[1]} />
          <ServiceCard {...services[2]} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex flex-col gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-md overflow-hidden shadow-md group h-[14rem] sm:h-[16rem] md:h-full"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4 text-white">
        <h3 className="text-xl sm:text-2xl font-semibold mb-1 font-mono">{title}</h3>
        <p className="text-xs sm:text-sm max-w-xs leading-snug font-mono">{description}</p>
      </div>
    </motion.div>
  );
}
