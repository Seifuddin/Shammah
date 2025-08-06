"use client";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function VisitUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4">Visit Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We would love to welcome you to Shammah Gospel Church! Come join us
            in worship, fellowship, and spiritual growth.
          </p>

          <div className="flex items-start gap-3 mb-3 text-gray-700 text-sm">
            <MapPin size={20} className="text-blue-700" />
            <span>
              Shammah Gospel Church, Kiamutugu - Mwanianjau Road, Kiamutugu Town, Kirinyaga County
            </span>
          </div>

          <div className="flex items-start gap-3 mb-6 text-gray-700 text-sm">
            <Clock size={20} className="text-blue-700" />
            <span>
              Sunday Service: 9:00 AM – 1:00 PM <br />
              Midweek Fellowship: Wednesdays & Thursdays at 3:00 PM
            </span>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition"
          >
            Get Directions
          </a>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          className="rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.36282986905!2d36.8172445!3d-1.2863896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f0c490dd0f%3A0xcedb73961c6eb569!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
