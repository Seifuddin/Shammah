"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function SundayCTA() {
  return (
    <section className="relative bg-white text-blue-900 py-20 px-6 md:px-12 text-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-3xl text-red-700 font-bold text-center mb-4 leading-tight">
          Join us this Sunday
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-700">
          Experience a life-changing service filled with worship, the Word, and
          fellowship. We’d love to welcome you and your family!
        </p>

        {/* Service Info */}
        <div className="mb-10">
          <p className="text-xl font-semibold">📍 Nairobi, Kenya</p>
          <p className="text-md text-gray-800">Sundays • 9:00 AM - 01:00 PM</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-4">
          <Link href="/visit">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-700 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-900 transition"
            >
              Plan Your Visit
            </motion.button>
          </Link>

          <Link href="/watch">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-red-700 text-red-700 px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white  transition"
            >
              Watch Online
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
