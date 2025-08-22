"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const timeline = [
  {
    year: "2010",
    title: "Church Founded",
    description: "Our church was established with a small group of believers gathered in prayer and fellowship."
  },
  {
    year: "2014",
    title: "First Expansion",
    description: "We grew into a larger congregation and built our first dedicated worship center."
  },
  {
    year: "2018",
    title: "Community Outreach",
    description: "We launched outreach programs supporting the needy, orphans, and local communities."
  },
  {
    year: "2023",
    title: "Global Ministry",
    description: "Our message reached beyond borders through digital platforms and international missions."
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl text-red-700 font-bold text-center mb-12">
          Our Journey in Faith
        </h2>
        <div className="relative border-l-4 border-blue-900">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-red-700 text-white rounded-full shadow-lg">
                <Calendar className="w-4 h-4" />
              </span>
              <h3 className="text-xl text-blue-900 font-semibold">{item.year} — {item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
