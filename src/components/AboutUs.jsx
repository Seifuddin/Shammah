"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Aboutus() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-100 via-white to-yellow-100">
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/1000_F_382847586_DB04vLolKezvGHLKHbov6nLrMsTUsRmw.jpg"
              alt="Church worship"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Intro */}
        <div className="text-left">
                  <h1 className="max-w-7xl text-xl md:text-2xl font-bold text-yellow-600 mb-2">
                    Welcome to Shammah Gospel Church<span className=""></span>
                  </h1>
                  <p className="italic text-lg font-semibold text-blue-900">
                    Join us every Sunday at 10 AM for worship and fellowship.
                  </p>
        </div>

          <h2 className="text-xl md:text-2xl font-bold text-yellow-600 mb-2 mt-4">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At Shammah Gospel Church, we are passionate about sharing the love
            of Christ, teaching the Word of God with clarity, and building a
            strong community of believers rooted in faith, hope, and love.
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-yellow-600 mb-2 mt-4">Our Mission</h2>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to equip people spiritually and practically to live
            victorious lives through Christ. Whether you're new to church or
            seeking a spiritual home, you are welcome here.
          </p>
        </motion.div>

        
      </div>
    </section>
  );
}
