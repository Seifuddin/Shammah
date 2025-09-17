"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

export default function ChurchTV() {
  return (
    <section className="relative bg-blue-900 py-16 px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-10">
            Watch JCM Church TV <br /> Anytime, Anywhere 📺
          </h2>
          <p className="text-lg text-gray-200">
            Experience the Word of God, live worship, and uplifting messages from
            the comfort of your home. Our TV station is available to you 24/7 —
            wherever you are in the world.
          </p>

          <Link
            href="/watch-live"
            className="inline-flex items-center px-6 py-3 bg-yellow-400 text-indigo-900 font-serif font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition"
          >
            <PlayCircle className="w-6 h-6 mr-2" />
            Watch Live
          </Link>
        </motion.div>

        {/* Right Side TV Embed */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400"
        >
          {/* Example Embed: Replace YouTube Link */}
          <iframe
            className="w-full h-64 md:h-80 lg:h-96"
            src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID"
            title="JCM Church TV"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
