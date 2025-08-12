"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/1754933927764.jpg",
  "/images/1754933938039.jpg",
  "/images/1754933942104.jpg",
  "/images/1754933954146.jpg",
];

export default function PraiseWorshipTeam() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left Column – Text and Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-yellow-600 mb-4">
            Free Medical Camp
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our Free Medical Camp is completely free and free to the public...
            Our Free Medical Camp is completely free and free to the public...
            Our Free Medical Camp is completely free and free to the public...
            Our Free Medical Camp is completely free and free to the public...
          </p>
          <div className="rounded-lg max-h-60 md:max-h-96 overflow-hidden shado">
                      {/* image */} <Image 
                        src="/images/1754934067555.jpg"
                        alt="Church worship"
                        width={600}
                        height={400}
                        className="w-full  object-cover"
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
            Oue medical team in Action
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
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
