"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Ready() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready to Experience God’s Presence?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto"
        >
          Connect with us today through a call, WhatsApp, or email. 
          We’re here to pray, guide, and walk with you in faith.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {/* Phone Call Button */}
          <a
            href="tel:+254712345678"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span className="font-medium">Call Us</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">WhatsApp</span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:info@yourchurch.org"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl shadow-lg transition transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium">Email Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
