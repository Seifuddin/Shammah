// File: components/ImageSlider.jsx
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/GDPAtjUXEAAT9hI.jpg',
  '/images/1754123364089b.jpg',
  '/images/1754123353752b.jpg',
  '/images/1754123368741b.jpg',
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[current]}
          src={images[current]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute w-full h-full object-cover"
          alt="Church Slide"
        />
      </AnimatePresence>
    </div>
  );
}