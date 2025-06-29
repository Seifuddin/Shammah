"use client";
import { motion } from "framer-motion";

export default function Location() {
  // Google Maps URL
  const googleMapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9487.075528360676!2d36.8191619147623!3d-1.2792480364845629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f9964aed32f%3A0x2a81c5e4ac4dd3c0!2sInklab%20Digital%20Printers!5e0!3m2!1sen!2ske!4v1745533752904!5m2!1sen!2ske";

  // Animation config for text sections and map
  const animationConfig = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 1 },
    viewport: { once: true },
  };

  return (
    <section className="bg-blue-100 py-20 px-6 md:px-16 lg:px-24 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div {...animationConfig}>
      <h2 className="text-blue-600 text-xl font-semibold mb-2">Visit Us</h2>
          <p className="text-blue-950 text-lg leading-relaxed mb-6">
            We are located at <strong>Kirinyaga County, Kiamutugu Town</strong> – along Kiamutugu-Mwanianjau road, Just 200 meters from Kiamutugu CBD. Welcome one, Welcome all!!!
          </p>

          {/* Animated Button with Icon and Pulse */}
          <div className="relative inline-block">
            <motion.span
              className="absolute inset-0 rounded-full bg-green-600 opacity-30"
              animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            />

            <motion.a
              href="https://maps.app.goo.gl/8rZ9a6jx9MUV4rjJ7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#047857" }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 flex items-center gap-2 bg-[#0a1d37] text-white px-6 py-3 rounded-md font-semibold shadow-lg transition"
            >
              Get Directions
            </motion.a>
          </div>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div {...animationConfig} className="w-full h-80 md:h-full shadow-lg border rounded-lg overflow-hidden">
          <iframe
            title="Capvim Location"
            src={googleMapURL}
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}