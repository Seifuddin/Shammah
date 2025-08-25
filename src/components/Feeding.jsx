"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUsers, FaChild, FaHandsHelping } from "react-icons/fa";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Gallery images
const images = [
  "/images/1754933799788.jpg",
  "/images/1754123630196.jpg",
  "/images/1754933817706.jpg",
  "/images/1754933796240.jpg",
];

// Hook for animated counter
function useCounterAnimation(from, to, duration = 2) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const increment = (to - from) / (duration * 60); // ~60fps
    let frameId;

    const animate = () => {
      start += increment;
      if (start < to) {
        setCount(Math.floor(start));
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    animate();

    return () => cancelAnimationFrame(frameId);
  }, [from, to, duration]);

  return count;
}

export default function Feeding() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Animated counters
  const children = useCounterAnimation(0, 5000, 3);
  const orphanages = useCounterAnimation(0, 100, 3);
  const volunteers = useCounterAnimation(0, 1200, 3);

  const openImage = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => setSelectedImage(null);

  const showPrev = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const showNext = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left: Text + Counters + CTA */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl text-blue-900 font-bold text-left mb-6 leading-snug"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Support Our <span className="text-red-600">Feeding Mission</span>
          </motion.h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Help us reach out and feed{" "}
            <span className="font-semibold text-blue-900">
              street children and orphans
            </span>{" "}
            across the country. Your contribution brings hope and sustains
            lives. Join us in showing Christ&apos;s love through{" "}
            <span className="italic text-blue-900">action and compassion.</span>
          </p>

          {/* Impact Counters */}
          <div className="grid grid-cols-3 gap-6 mb-8 text-center">
            <div>
              <FaUsers className="text-red-600 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-red-700">{children}+</h3>
              <p className="text-sm text-gray-600">Children Reached</p>
            </div>
            <div>
              <FaChild className="text-red-600 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-red-700">{orphanages}+</h3>
              <p className="text-sm text-gray-600">Orphanages Supported</p>
            </div>
            <div>
              <FaHandsHelping className="text-red-600 text-4xl mx-auto mb-2" />
              <h3 className="text-2xl font-bold text-red-700">
                {volunteers}+
              </h3>
              <p className="text-sm text-gray-600">Volunteers Involved</p>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-red-800">
                <span>Monthly Feeding Goal</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-red-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1.2 }}
                  className="bg-red-500 h-3 rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-red-800">
                <span>Funds Raised</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-red-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="bg-red-600 h-3 rounded-full"
                />
              </div>
            </div>
          </div>

          {/* CTA 
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:from-blue-700 hover:to-blue-800 transition"
          >
            🍞 Donate to Feed a Child
          </motion.button>
          */}
        </div>

        {/* Right: Gallery */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="cursor-pointer group overflow-hidden rounded-xl shadow relative"
                onClick={() => openImage(src, index)}
              >
                <Image
                  src={src}
                  alt={`Feeding Mission ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">View Image</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-h-[90vh] max-w-full rounded-xl shadow-lg"
            />

            {/* Close */}
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Prev */}
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={showPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Next */}
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={showNext}
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
