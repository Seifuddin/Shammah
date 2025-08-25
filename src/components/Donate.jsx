"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function DonationCTA() {
  const [amount, setAmount] = useState("");

  const presetAmounts = [500, 1000, 2000, 5000];

  return (
    <section className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-16 px-6 md:px-12 text-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Support God’s Work with Your Giving
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Your generosity helps us spread the gospel, support our community, and
          change lives. Every gift makes a difference.
        </p>

        {/* Preset donation buttons 
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {presetAmounts.map((val) => (
            <button
              key={val}
              onClick={() => setAmount(val)}
              className={`px-6 py-2 rounded-full border-2 transition-all ${
                amount === val
                  ? "bg-white text-purple-600 border-white font-bold"
                  : "border-white hover:bg-white/20"
              }`}
            >
              KES {val.toLocaleString()}
            </button>
          ))}
        </div>
        */}
        {/* Custom input 
        <div className="flex justify-center items-center gap-3 mb-6">
          <span className="text-lg">KES</span>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-2 border border-white rounded-lg w-40 text-white focus:ring-2 focus:ring-white outline-none"
          />
        </div>
        */}
        {/* Donate button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => alert(`You donated KES ${amount}`)}
          className="px-8 py-3 bg-white text-purple-700 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Donate Now
        </motion.button>

        {/* Extra message */}
        <p className="mt-6 text-sm opacity-80">
          “Give, and it will be given to you.” – Luke 6:38
        </p>
      </motion.div>
    </section>
  );
}
