"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-950 via-indigo-800 to-purple-900 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-blac"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-14 py-20 flex flex-col md:flex-row gap-5 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Experience God's {" "}
            <span className="text-yellow-400">Love With Us</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Welcome to Jesus Christ Companion Ministry (JCM),
            A place of worship, love, and spiritual growth. Join us every Sunday
            for a powerful encounter with God.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-yellow-400 text-indigo-900 rounded-2xl shadow-md font-semibold hover:bg-yellow-500 transition"
            >
              Watch Live
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white text-gray-100 rounded-2xl hover:bg-yellow-400 hover:text-gray-900 transition"
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
            src="/images/1754123364089c.jpg"
            alt="Web & Graphics Illustration"
            className="w-full rounded-3xl max-w-md md:max-w-lg lg:max-w-xl drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
