"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FaUsers, FaChild, FaHandsHelping } from "react-icons/fa";

const images = [
  "/images/1754933799788.jpg",
  "/images/1754123630196.jpg",
  "/images/1754933817706.jpg",
  "/images/1754933796240.jpg",
];

export default function Feeding() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left: Text Content */}
        <div>
          <motion.h2
            className="text-3xl text-blue-900 font-bold text-left mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Support Our Feeding Mission
          </motion.h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Help us reach out and feed **street children and orphans** across the country.
            Your contribution brings hope and sustains lives.
            Join us in showing Christ's love through action and compassion.
          </p>

          {/* Impact Counters */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <FaUsers className="text-red-600 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-red-700">5,000+</h3>
              <p className="text-sm text-gray-600">Children Reached</p>
            </div>
            <div>
              <FaChild className="text-red-600 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-red-700">100+</h3>
              <p className="text-sm text-gray-600">Orphanages Supported</p>
            </div>
            <div>
              <FaHandsHelping className="text-red-600 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-red-700">1,200+</h3>
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
              <div className="w-full bg-red-200 rounded-full h-3">
                <div className="bg-red-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-red-800">
                <span>Funds Raised</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-red-200 rounded-full h-3">
                <div className="bg-red-600 h-3 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 w-full borde bg-blue-900 bord-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Donate to Feed a Child
          </motion.button>
        </div>

        {/* Right Column – Gallery */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
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
          <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {/* Intro 
                  <div className="text-left">
                            <h1 className="max-w-7xl text-xl md:text-2xl font-bold text-yellow-600 mb-2">
                              Welcome to Shammah Gospel Church<span className=""></span>
                            </h1>
                            <p className="italic text-lg font-semibold text-blue-900">
                              Join us every Sunday at 10 AM for worship and fellowship.
                            </p>
                  </div>
          */}
                  </motion.div>
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
