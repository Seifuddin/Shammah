"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const images = [
  "/images/1754933613059.jpg",
  "/images/1754933638432.jpg",
  "/images/1754933745674.jpg",
  "/images/1754933636974.jpg",
];

export default function Projects() {
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
          <h2 className="text-3xl text-blue-900 font-bold text-left mb-7">
            Raha premium (Kavagara)
          </h2>
                  {/* Right:  Image */}
                  <motion.div
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src="/images/1754933620182.jpg"
                      alt="Feeding Children"
                      className="w-full h-auto object-cover max-h-96 rounded-xl shadow-lg"
                    />
                  </motion.div>
                  <p className="text-lg text-gray-600 mb-7 mt-6">
            Raha premium is a project meant to give food stuff to the less fortunate in the community.
            It takes place every sunday and it is sponsored by....
            Raha premium is a project meant to give food stuff to the less fortunate in the community.
          </p>
        </motion.div>

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
                    <p className="text-gray-700 mb-4 mt-6 leading-relaxed">
                      Thanks to the generousity of our sponsors and the hard work of the Sympathy Hands Foundation Team, 
                      our patients and elderly left with food packages to take home - 
                      a reminder that God's love follows them beyond these grounds.
                    </p>
                  </motion.div>
                  <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="w-full mt-4 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-yellow-700"
                    >
                      Support Us
                    </motion.button>
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
