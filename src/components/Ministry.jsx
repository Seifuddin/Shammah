"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Raha Premium Project - Kavagara",
    description:
      "Empowering the next generation with faith, fellowship, and leadership.",
    image: "/images/1754933627001.jpg",
  },
  {
    title: "Feeding Program",
    description:
      "Encouraging and nurturing women to grow spiritually and impact their families.",
    image: "/images/1754933799788.jpg",
  },
  {
    title: "Free Medical Camp",
    description:
      "Small group fellowships that dive deeper into the Word of God.",
    image: "/images/1754933930596.jpg",
  },
];

export default function Ministry() {
  return (
    <section className="container mx-auto px-4 py-16 bg-blue-50">
      <motion.h2
          className="text-3xl text-red-700 font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          JCM to the community
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
