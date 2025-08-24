"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const pastEvents = [
  { id: 1, title: "Easter Celebration 2025", image: "/images/1754123368741.jpg" },
  { id: 2, title: "Youth Worship Night", image: "/images/1754123368741.jpg" },
  { id: 3, title: "Christmas Service 2024", image: "/images/1754123368741.jpg" },
  { id: 4, title: "Community Feeding Program", image: "/images/1754123368741.jpg" },
  { id: 5, title: "Baptism Sunday", image: "/images/1754123368741.jpg" },
  { id: 6, title: "Prayer Conference 2024", image: "/images/1754123368741.jpg" },
];

export default function PastEventsGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const paginate = (newDirection) => {
    setSelectedIndex((prev) => {
      let newIndex = prev + newDirection;
      if (newIndex < 0) newIndex = pastEvents.length - 1;
      if (newIndex >= pastEvents.length) newIndex = 0;
      return newIndex;
    });
  };

  // 🔄 Auto-play slideshow every 4 seconds
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <section className="py-20 bg-white" id="past-events">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900"
          >
            Past Events Gallery
          </motion.h2>
          <p className="text-gray-600 mt-3">
            A look back at the impactful moments and memories we’ve shared as a church family.
          </p>
        </div>

        {/* Grid preview */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
              onClick={() => {
                setSelectedIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={400}
                className="object-cover w-full h-64 group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold px-4 text-center">
                  {event.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Slideshow */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-6 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next */}
            <button
              onClick={() => paginate(1)}
              className="absolute right-6 text-white bg-white/20 hover:bg-white/40 p-3 rounded-full"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Multi-slide carousel */}
            <div className="flex gap-6 w-full max-w-6xl overflow-hidden px-6">
              {pastEvents
                .slice(selectedIndex, selectedIndex + 3)
                .concat(
                  selectedIndex + 3 > pastEvents.length
                    ? pastEvents.slice(0, (selectedIndex + 3) % pastEvents.length)
                    : []
                )
                .map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      width={600}
                      height={400}
                      className="rounded-lg object-contain mx-auto max-h-[70vh]"
                    />
                    <p className="text-white mt-3 text-center">{event.title}</p>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
