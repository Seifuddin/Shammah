"use client";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM – 12:00 PM",
    location: "Main Sanctuary",
  },
  {
    title: "Midweek Fellowship",
    date: "Every Wednesday",
    time: "6:00 PM – 8:00 PM",
    location: "Church Hall",
  },
  {
    title: "Youth Ministry Gathering",
    date: "Every Saturday",
    time: "4:00 PM – 6:00 PM",
    location: "Youth Hall",
  },
  {
    title: "Prayer & Intercession",
    date: "Friday Night",
    time: "8:00 PM – 10:00 PM",
    location: "Prayer Room",
  },
];

export default function Events() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-blue-800 text-center mb-10"
        >
          Upcoming Events
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {event.title}
              </h3>
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <CalendarDays size={16} className="mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <Clock size={16} className="mr-2" />
                {event.time}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin size={16} className="mr-2" />
                {event.location}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
