"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Testimonies() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20 flex flex-col md:flex-row items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Experience God's Love{" "}
            <span className="text-yellow-400">With Us</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Welcome to Jesus Christ Companion Ministry (JCM),
            A place of worship, love, and spiritual growth. Join us every Sunday
            for a powerful encounter with God.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-2xl shadow-md font-semibold hover:bg-yellow-500 transition"
            >
              Watch Live
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/1754123364089-removebg-preview.png"
            alt="Web & Graphics Illustration"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
