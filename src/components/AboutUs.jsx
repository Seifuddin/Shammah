"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SermonPlayer from "@/components/SermonPlayer";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import JourneyTimeline from "./JourneyTimeline";
import AboutUsTimeline from "./About";

export default function Aboutus() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Shape */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-200 rounded-full blur-3xl opacity-40 -z-10" />

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold mb-4 text-center text-blue-800"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>
      <motion.h4
        className="text-center text-lg md:text-xl font-medium text-gray-600 mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        A place to belong, believe, and become
      </motion.h4>

      {/* Grid */}
      <div className="container mx-auto px-6 pb-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60">
            <ImageSlider />
          </div>
          {/* Caption Overlay */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white text-sm md:text-base px-4 py-2 rounded-full backdrop-blur-sm">
            Moments of Worship
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-lg">
            We are passionate about sharing the love of Christ, teaching the Word
            of God with clarity, and building a strong community of believers
            rooted in faith, hope, and love.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-lg">
            Join us every Sunday at <span className="font-semibold text-blue-800">10 AM</span> for worship and fellowship.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-blue-700">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-lg">
            To equip people spiritually and practically to live victorious lives
            through Christ. Whether you're new to church or seeking a spiritual
            home, you are welcome here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/visit"
              className="bg-blue-700 text-white w-full sm:w-auto px-8 py-3 rounded-2xl font-medium shadow-md hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 text-center"
            >
              Learn More
            </Link>
            <Link
              href="/live"
              className="bg-red-600 text-white w-full sm:w-auto px-8 py-3 rounded-2xl font-medium shadow-md hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300 text-center"
            >
              Join Us
            </Link>
          </div>
        </motion.div>
      </div>
      <JourneyTimeline />
    </section>
  );
}
