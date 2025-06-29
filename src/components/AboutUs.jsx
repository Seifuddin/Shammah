"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Aboutus() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-blue-800 mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Shammah Gospel Church, we are passionate about sharing the love
            of Christ, teaching the Word of God with clarity, and building a
            strong community of believers rooted in faith, hope, and love.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to equip people spiritually and practically to live
            victorious lives through Christ. Whether you're new to church or
            seeking a spiritual home, you are welcome here.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/edward-cisneros-KoKAXLKJwhk-unsplash-scaled.jpg"
              alt="Church worship"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
