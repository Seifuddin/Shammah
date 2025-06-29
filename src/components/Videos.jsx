"use client";

import { useState } from "react";
import { motion } from "framer-motion";


const services = [
  {
    title: "The fear of God",
    description:
      "Learn more on fear of the Lord as explained by our brother.",
    author: "by Rev. Julius Mugo",
    date: "March 12, 2024",
    image: "/images/pexels-pixabay-268533.jpg",
  },

  {
    title: "The fear of God",
    description:
      "Learn more on fear of the Lord as explained by our brother.",
    author: "by Rev. Julius Mugo",
    date: "March 12, 2024",
    image: "/images/pexels-pixabay-268533.jpg",
  },

  {
    title: "The fear of God",
    description:
      "Learn more on fear of the Lord as explained by our brother.",
    author: "by Rev. Julius Mugo",
    date: "March 12, 2024",
    image: "/images/pexels-pixabay-268533.jpg",
  },

  {
    title: "The fear of God",
    description:
      "Learn more on fear of the Lord as explained by our brother.",
    author: "by Rev. Julius Mugo",
    date: "March 12, 2024",
    image: "/images/pexels-pixabay-268533.jpg",
  },

  {
    title: "The fear of God",
    description:
      "Learn more on fear of the Lord as explained by our brother.",
    author: "by Rev. Julius Mugo",
    date: "March 12, 2024",
    image: "/images/pexels-pixabay-268533.jpg",
  },

  {
    title: "The fear of God",
    description:
      "Learn more on fear of the Lord as explained by our brother.",
    author: "by Rev. Julius Mugo",
    date: "March 12, 2024",
    image: "/images/pexels-pixabay-268533.jpg",
  },
];

export default function Videos() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative bg-blue-100 z-0 py-12 px-5 mx-auto">
      {/* Background image 
      <div className="absolute inset-0 -z-10 opacity-50">
        <img
          src="/images/pngwing.com (13).png" // Update this path if needed
          alt="FAQ background"
          className="w-full h-full object-cover"
        />
      </div>
      */}
  <div className="absolute inset-0 z-0"></div> {/* Optional overlay */}
  <div className="relative z-10 max-w-7xl mx-auto text-center">
    <h1 className="max-w-7xl text-xl font-extrabold text-blue-900 mb-5">
                    Watch our Preaching's Videos <span className="text-orange-500"></span>
                  </h1>
    <p className="italic text-blue-900 font-semibold mb-10 max-w-4xl mx-auto">
      Click to watch and listen to our wonderful Sermons delivered by our inspired Leaders.
    </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className=" border-gray-300 shadow-lg overflow-hidden bg-white transition duration-300 hover:shadow-2xl"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-36 object-cover border-b border-gray-300"
              />
              <div className="p-3 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {service.icon}
                  <h3 className="font-semibold text-blue-600">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-900 text-sm line-clamp-3">
                  {service.description}
                </p>
                <div className="flex gap-2">
                  <p className="text-blue-900 gap-2 font-semibold mt-2 text-sm line-clamp-3">
                    {service.author}  
                  </p>
                  <p className="text-blue-900 text-sm mt-2 line-clamp-3">
                    {service.date}
                  </p>
                  </div>
                <button
                  onClick={() => setActiveService(service)}
                  className="inline-block bg-blue-600 text-white py-2 px-6 mt-4 text-sm font-semibold rounded hover:bg-blue-600 transition-all duration-300"
                >
                  Watch..
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {activeService && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-xl"
          >
            <button
              onClick={() => setActiveService(null)}
              className="absolute top-3 right-3 text-blue-950 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-52 object-cover rounded-md mb-4"
            />
            <div className="flex items-center gap-2 mb-2">
              {activeService.icon}
              <h3 className="text-xl font-bold text-orange-700">{activeService.title}</h3>
            </div>
            <p className="text-blue-950">{activeService.description}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}