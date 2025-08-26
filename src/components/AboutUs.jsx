"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Aboutus() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-200 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
            About <span className="text-red-700">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Rooted in faith, hope, and love — growing together as one family in
            Christ.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/GDPAtjUXEAAT9hI.jpg"
              alt="About"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
              Welcome to Our Church
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are passionate about sharing the love of Christ, teaching the
              Word of God with clarity, and building a strong community of
              believers. Our desire is to see lives transformed and hearts
              rooted in the Gospel.
            </p>

            <p className="text-gray-600 italic">
              “Join us every Sunday at 10 AM for worship and fellowship.”
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/visit"
                className="bg-gradient-to-r from-blue-900 to-red-700 text-white font-semibold text-center py-2 px-6 rounded-full hover:opacity-90 transition transform hover:scale-105 shadow-lg"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-gray-300 text-blue-900 font-semibold text-center py-2 px-6 rounded-full hover:bg-gray-100 transition transform hover:scale-105 shadow"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
