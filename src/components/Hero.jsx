"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSect() {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: "url('/images/pexels-pixabay-268533.jpg')" }}
    >
      <div className="absolute inset-0 bg-blac bg-opacity-90" />

      <motion.div
        className="relative z-10 max-w-3xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
          Welcome to Shammah Gospel Church
        </h1>
        <p className="text-lg sm:text-xl mb-6 font-light">
          “Where God Dwells Among His People” – Psalm 132:13-14
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/about"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
          >
            Join Us This Sunday
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
