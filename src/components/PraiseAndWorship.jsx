"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg",
  "/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg",
  "/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg",
  "/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg",
  "/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg",
  "/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg",
];

export default function PraiseWorshipTeam() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-gradient-to-r from-yellow-100 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 py-16">
        {/* Left Column – Text and Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-yellow-800 mb-4">
            Praise & Worship Ministry
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our Praise and Worship team leads the church into God's presence
            through spirit-filled music and praise. Their commitment to worship
            cultivates an atmosphere where lives are transformed.
          </p>
          <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Worship Video"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* Right Column – Gallery */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-yellow-800 mb-4">
            Worship in Action
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="cursor-pointer group overflow-hidden rounded-xl shadow"
                onClick={() => setSelectedImage(src)}
              >
                <Image
                  src={src}
                  alt={`Worship ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal Image Viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            className="max-h-[90vh] max-w-full rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
