"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SermonPlayer from "@/components/SermonPlayer";
import Image from "next/image";
import Link from "next/link";
import { Users, BookOpen, HeartHandshake, Church } from "lucide-react"; // ✅ Icons

function Counter({ from, to, duration = 2, label, Icon }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = 0;
    const end = to;
    const incrementTime = 20; // ms
    const steps = Math.ceil((duration * 1000) / incrementTime);
    const increment = (end - start) / steps;

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(current));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  return (
    <motion.div
      className="text-center flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-3 shadow-md">
        <Icon className="w-7 h-7 text-blue-900" />
      </div>
      {/* Counter */}
      <h4 className="text-3xl md:text-4xl font-extrabold text-red-700">
        {count}+
      </h4>
      <p className="text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
}

export default function Aboutus() {
  return (
    <section className="py-20 bg-gray-200 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading 
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
            About <span className="text-red-700">Us</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Rooted in faith, hope, and love — growing together as one family in Christ.
          </p>
        </motion.div>
*/}
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Media / Sermon Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-md overflow-hidden shadow-xl bg-white"
          >
            <Image
                          src="/images/GDPAtjUXEAAT9hI.jpg"
                          alt="About"
                          width={600}
                          height={400}
                          className="w-full h-auto max-h-72 md:max-h-80 object-cover rounded-xl shadow-lg"
                        />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-3">About Us</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are passionate about sharing the love of Christ, teaching the
              Word of God with clarity, and building a strong community of
              believers. Our desire is to see lives transformed and hearts
              rooted in the Gospel.
            </p>
{/* Right: Text Content
            <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To equip people spiritually and practically to live victorious
              lives through Christ. Whether you're new to faith or looking for a
              spiritual home, you belong here.
            </p>
 */}
            <p className="text-gray-700 italic mb-6">
              “Join us every Sunday at 10 AM for worship and fellowship.”
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <Link
  href="/visit"
  className="bg-blue-900 text-white text-center py-1 px-6 rounded hover:bg-red-800 transition transform hover:scale-105 shadow-lg"
>
  Learn More
</Link>

            </div>
          </motion.div>
        </div>

        {/* Animated Counters 
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Counter from={0} to={500} label="Members" Icon={Users} />
          <Counter from={0} to={1200} label="Sermons Preached" Icon={BookOpen} />
          <Counter from={0} to={50} label="Outreach Programs" Icon={HeartHandshake} />
          <Counter from={0} to={20} label="Years in Ministry" Icon={Church} />
        </motion.div>
        */}
      </div>
    </section>
  );
}
