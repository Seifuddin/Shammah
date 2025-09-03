"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import TithesAndOffering from "./TithesAndOffering";

export default function Tithes() {
  return (
    <section className="relative bg-gray-50 text-white overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-blac"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-14 py-20 flex flex-col md:flex-row gap-5 items-center">
        
        {/* Left Content */}
        <TithesAndOffering />

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
        >
          <img
            src="/images/1754933623756.jpg"
            alt="Web & Graphics Illustration"
            className="w-full h-full rounded-xl  drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
