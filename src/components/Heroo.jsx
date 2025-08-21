"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  // Track mouse movement for parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const backgroundX = useTransform(x, [-1, 1], ["-5%", "5%"]);
  const backgroundY = useTransform(y, [-1, 1], ["-5%", "5%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const offsetX = (e.clientX / innerWidth) * 2 - 1;
      const offsetY = (e.clientY / innerHeight) * 2 - 1;
      x.set(offsetX);
      y.set(offsetY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative h-[90vh] py-16 flex items-center justify-center text-white overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/1754123364089b-removebg-preview.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          x: backgroundX,
          y: backgroundY,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-0" />

      {/* Floating Cross (left) */}
      <motion.div
        className="absolute left-10 top-1/3 text-white/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 md:w-16 md:h-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2v20m-6-6h12"
          />
        </svg>
      </motion.div>

      {/* Floating Dove (right) */}
      <motion.div
        className="absolute right-10 bottom-1/3 text-white/25"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-14 h-14 md:w-20 md:h-20"
          viewBox="0 0 640 512"
          fill="currentColor"
        >
          <path d="M544 32c-35.3 0-64 28.7-64 64 0 11.4 3 22.1 8.2 31.3L256 256H128L0 448l64-32 64 32 64-64h96l232 104-73-120 73-72c8.9-8.8 16.4-19.7 21.3-32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32h-55.6c-10.8-19.2-31-32-54.4-32h-8c0-35.3-28.7-64-64-64z" />
        </svg>
      </motion.div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-300 font-semibold uppercase tracking-wide"
          >
            With Pastor Ben
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            <span className="relative">
              Experience{" "}
              <span className="md:text-red-500">God's Love</span>
              <span className="absolute inset-0 blur-2xl bg-blue-500/30 -z-10 rounded-full"></span>
            </span>{" "}
            With Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-200 max-w-xl"
          >
            Welcome to <span className="font-semibold text-white">Jesus Christ Companion Ministry (JCM)</span>. 
            A place of worship, love, and spiritual growth. Join us every Sunday
            for a powerful encounter with God.
          </motion.p>

          {/* Glowing Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/visit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(59,130,246,0.7)]"
            >
              Plan a Visit
            </Link>
            <Link
              href="/live"
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_4px_rgba(255,255,255,0.7)]"
            >
              Watch Live
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden md:flex items-center justify-center"
        >
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg shadow-lg max-w-sm text-center">
            <p className="text-xl italic">
              “For where two or three gather in my name, there am I with them.”
            </p>
            <span className="block mt-4 text-blue-300 font-semibold">
              - Matthew 18:20
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
