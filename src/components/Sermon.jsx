"use client";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

const sermons = [
  {
    title: "Walking by Faith, Not by Sight",
    date: "June 23, 2025",
    videoUrl: "https://www.youtube.com/embed/someVideoID1",
  },
  {
    title: "The Power of Prayer",
    date: "June 16, 2025",
    videoUrl: "https://www.youtube.com/embed/someVideoID2",
  },
  {
    title: "Victory in Christ",
    date: "June 9, 2025",
    videoUrl: "https://www.youtube.com/embed/someVideoID3",
  },
];

export default function Sermon() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-xl font-bold text-blue-800 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Latest Sermons
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {sermons.map((sermon, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={sermon.videoUrl}
                  title={sermon.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-700 mb-1">
                  {sermon.title}
                </h3>
                <p className="text-sm text-gray-600">{sermon.date}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-700 font-medium hover:underline"
          >
            <PlayCircle size={20} />
            View All Sermons
          </a>
        </div>
      </div>
    </section>
  );
}
