"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/1754933613059.jpg",
  "/images/1754933638432.jpg",
  "/images/1754933745674.jpg",
  "/images/1754933636974.jpg",
];

export default function Projects() {
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
          <h2 className="text-3xl md:text-4xl text-red-700 font-bold text-left mb-7">
            Raha Premium
          </h2>

          <motion.div
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/1754933620182.jpg"
              alt="Feeding Children"
              className="w-full h-auto max-h-72 object-cover rounded-xl shadow-lg"
            />
          </motion.div>

          <p className="text-lg text-gray-700 mb-6 mt-6 leading-relaxed">
            <span className="font-semibold text-red-700">Raha Premium</span> is
            a project meant to give food stuff to the less fortunate in the
            community. It takes place every Sunday and is supported by generous
            sponsors and partners.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed italic">
            “Every Sunday, more than{" "}
            <span className="font-semibold text-red-700">100 families</span>{" "}
            leave with food packages — a reminder that God’s love follows them
            beyond these grounds.”
          </p>
        </motion.div>

        {/* Right Column – Gallery + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="cursor-pointer group overflow-hidden rounded-xl shadow relative"
                onClick={() => openImage(src, index)}
              >
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
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

          {/* Paragraph 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              Thanks to the generosity of our{" "}
              <span className="font-semibold text-red-600">sponsors</span> and
              the hard work of the{" "}
              <span className="font-semibold text-blue-900">
                Sympathy Hands Foundation Team
              </span>
              , our patients and elderly left with food packages to take home.
            </p>
          </motion.div>
          */}
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition"
            >
              Donate Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="flex-1 bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-900 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-300 transition"
            >
              Join as Volunteer
            </motion.button>
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
