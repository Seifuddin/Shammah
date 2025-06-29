"use client";
import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Baby,
  BookOpen,
  Briefcase,
} from "lucide-react";

const ministries = [
  {
    icon: <Users size={28} className="text-blue-700" />,
    title: "Youth Ministry",
    description:
      "Empowering the next generation with faith, fellowship, and leadership.",
  },
  {
    icon: <HeartHandshake size={28} className="text-blue-700" />,
    title: "Women Ministry",
    description:
      "Encouraging and nurturing women to grow spiritually and impact their families.",
  },
  {
    icon: <Briefcase size={28} className="text-blue-700" />,
    title: "Men Fellowship",
    description:
      "Building strong, God-fearing men through discipleship and accountability.",
  },
  {
    icon: <Baby size={28} className="text-blue-700" />,
    title: "Children Ministry",
    description:
      "Teaching biblical truths to kids in a fun, safe, and loving environment.",
  },
  {
    icon: <BookOpen size={28} className="text-blue-700" />,
    title: "Bible Study Groups",
    description:
      "Small group fellowships that dive deeper into the Word of God.",
  },
];

export default function Ministries() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-blue-800 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Ministries
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, i) => (
            <motion.div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center border-t-4 border-blue-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{ministry.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {ministry.title}
              </h3>
              <p className="text-gray-600 text-sm">{ministry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
