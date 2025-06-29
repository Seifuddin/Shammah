// File: components/ImageSlider.jsx
'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/slider1.jpg',
  '/images/slider2.jpg',
  '/images/slider3.jpg',
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

// Update: pages/index.jsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NewsletterForm from '@/components/NewsletterForm';
import MapSection from '@/components/MapSection';
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImageSlider />
      <main className="container mx-auto px-4 py-10">
        <section className="mb-12 text-center">
          <h3 className="text-2xl font-bold">Upcoming Events</h3>
          <p className="text-gray-600">Stay updated with what's happening.</p>
        </section>
        <NewsletterForm />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
