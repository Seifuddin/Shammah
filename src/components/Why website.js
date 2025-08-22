"use client";

import { motion } from "framer-motion";
import { Globe, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function WhyWebsite() {
  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            What is a Website & Why Your Business Needs One
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            A website is more than just an online address — it’s your digital identity, open 24/7 to customers across the globe. Whether you’re running a small business, a startup, or a large company, a website helps you build trust, attract clients, and grow your brand.
          </p>

          <ul className="mt-6 space-y-4">
            {[
              "Builds credibility and professionalism",
              "Expands your reach to new markets",
              "Showcases your products and services",
              "Works as your 24/7 salesperson",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Get Your Website Today
            </Link>
          </div>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-200 rounded-full blur-2xl opacity-40"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-200 rounded-full blur-2xl opacity-40"></div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center">
              <Globe className="w-20 h-20 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800">
                Your Digital Storefront
              </h3>
              <p className="mt-3 text-gray-600">
                Reach more customers, boost your credibility, and grow faster with a professionally designed website tailored to your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
