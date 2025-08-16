"use client";

import { motion } from "framer-motion";

export default function AboutUsTimeline() {
  const events = [
    {
      year: "1995",
      title: "Church Founded",
      description:
        "Our journey began as a small fellowship with a handful of faithful believers gathered in prayer and worship.",
    },
    {
      year: "2005",
      title: "Season of Growth",
      description:
        "The congregation grew, and by God’s grace we were able to build a permanent sanctuary to serve the community.",
    },
    {
      year: "2015",
      title: "Community Outreach",
      description:
        "We expanded our ministry to serve the needy, starting programs for orphans, widows, and the less privileged.",
    },
    {
      year: "2023",
      title: "Today",
      description:
        "We continue to grow in faith and love, committed to spreading the Gospel and making disciples of all nations.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Journey
        </h2>
        <div className="relative border-l-4 border-blue-600">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-6"
            >
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 mt-2"></div>
              <h3 className="text-xl font-semibold text-gray-900">
                {event.year} – {event.title}
              </h3>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
