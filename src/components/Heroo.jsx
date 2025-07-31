// app/components/HeroSection.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center text-white"
      style={{ backgroundImage: "url('/images/0_X9GoivpFR0-w0b3_.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-blac0 z-0" />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center h-full">
        {/* Left column: text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-4">
            Hope Restoration Centre
          </h1>
          <p className="text-lg sm:text-2xl text-gray-200 mb-6 max-w-xl font-mono">
            Welcome to Shammah Gospel Church. A place of worship, love, and spiritual growth. Join us every Sunday
            for a powerful encounter with God.
          </p>
          <div className="flex gap-4">
            <Link
              href="/visit"
              className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Plan a Visit
            </Link>
            <Link
              href="/live"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition"
            >
              Watch Live
            </Link>
          </div>
        </motion.div>

        {/* Right column: optional empty div or future media */}
        <div className="hidden md:block">
          {/* You can add an image, logo, or a scripture quote here if needed */}
        </div>
      </div>
    </section>
  );
}
