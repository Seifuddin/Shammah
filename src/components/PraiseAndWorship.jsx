"use client";
import { motion, animate, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Users, Stethoscope, Handshake } from "lucide-react"; // ✅ Added icons

const images = [
  "/images/1754933927764.jpg",
  "/images/1754933938039.jpg",
  "/images/1754933942104.jpg",
  "/images/1754933954146.jpg",
];

// ✅ Fixed Hook for counting animation
function useCounterAnimation(from, to, duration = 2) {
  const [count, setCount] = useState(from);
  const motionValue = useMotionValue(from);

  useEffect(() => {
    const controls = animate(motionValue, to, {
      duration,
      ease: "easeOut",
    });
    return controls.stop; // cleanup animation on unmount
  }, [to, duration, motionValue]);

  useMotionValueEvent(motionValue, "change", (latest) => {
    setCount(Math.floor(latest));
  });

  return count;
}

export default function PraiseWorshipTeam() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // ✅ Counters
  const patients = useCounterAnimation(0, 500, 3);
  const doctors = useCounterAnimation(0, 30, 3);
  const volunteers = useCounterAnimation(0, 80, 3);

  return (
    <section className="w-full bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left Column – Text and Featured Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h2 className="text-3xl md:text-4xl text-red-700 font-bold text-left mb-6">
            Visit Our Free Medical Camp
          </h2>

          <div className="rounded-lg max-h-60 md:max-h-96 overflow-hidden shadow-lg">
            <Image
              src="/images/1754934067555.jpg"
              alt="Medical Camp"
              width={600}
              height={400}
              className="w-full h-auto max-h-72 object-cover rounded-xl shadow-lg"
            />
          </div>

          <p className="text-lg text-gray-700 mt-6 leading-relaxed">
            Our{" "}
            <span className="font-semibold text-red-700">
              Free Medical Camp
            </span>{" "}
            is open to the public, offering essential health services to the
            community at no cost. It’s our way of spreading love, care, and
            hope through medical support.
          </p>
        </motion.div>

        {/* Right Column – Gallery + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
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
                  alt={`Medical Camp ${index + 1}`}
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

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-red-600 to-red-700 
               text-white px-6 py-3 rounded-full font-semibold shadow-lg 
               hover:from-red-700 hover:to-red-800 hover:shadow-xl transition-all"
            >
              ❤️ Donate Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-blue-600 to-blue-700 
               text-white px-6 py-3 rounded-full font-semibold shadow-lg 
               hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all"
            >
              🙌 Join as Volunteer
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* ✅ Improved Stats Section with Lucide Icons */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Patients Served */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md 
                       rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <Users className="w-7 h-7 text-white" />
            </div>
            <p className="text-4xl font-extrabold text-white">{patients}+</p>
            <p className="text-gray-200 mt-2 font-medium">Patients Served</p>
          </motion.div>

          {/* Doctors Participated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md 
                       rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>
            <p className="text-4xl font-extrabold text-white">{doctors}+</p>
            <p className="text-gray-200 mt-2 font-medium">Doctors Participated</p>
          </motion.div>

          {/* Volunteers Engaged */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md 
                       rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white/20 rounded-full mb-4">
              <Handshake className="w-7 h-7 text-white" />
            </div>
            <p className="text-4xl font-extrabold text-white">{volunteers}+</p>
            <p className="text-gray-200 mt-2 font-medium">Volunteers Engaged</p>
          </motion.div>
        </div>
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

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>

            {/* Prev Button */}
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={showPrev}
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Next Button */}
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
