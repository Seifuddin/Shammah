"use client";

import { motion } from "framer-motion";
import { CalendarDays, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "August 31, 2025",
    time: "10:00 AM - 12:30 PM",
    location: "JCM Church, Ruiru",
    description: "Join us for a powerful sunday worship service filled with praise, prayer, and the Word of God.",
  },
  {
    id: 2,
    title: "Youth Fellowship Night",
    date: "September 7, 2025",
    time: "5:00 PM - 8:00 PM",
    location: "JCM Church Youth Hall",
    description: "An exciting evening of worship, games, and fellowship designed to inspire and empower the youth.",
  },
  {
    id: 3,
    title: "Prayer & Fasting Week",
    date: "September 15 - 20, 2025",
    time: "6:00 AM - 7:30 AM",
    location: "JCM Church Main Sanctuary",
    description: "A week dedicated to prayer and fasting, seeking God's presence for breakthroughs and renewal.",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50" id="events">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-serif font-bold text-blue-900 mb-4"
          >
            Upcoming Events
          </motion.h2>
          <p className="text-gray-600 mt-3">
            Stay connected with JCM Church through our upcoming programs and gatherings.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 text-red-700 font-semibold">
                <CalendarDays className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-blue-900 mt-3">{event.title}</h3>
              <p className="text-gray-600 mt-2">{event.description}</p>

              <div className="mt-4 flex items-center font-semibold text-red-700 text-sm gap-2">
                <MapPin className="w-4 h-4 text-red-700 font-semibold" />
                <span>{event.location}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{event.time}</p>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="mt-5 inline-block bg-blue-900 text-center text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-indigo-700 transition"
              >
                Learn More
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
