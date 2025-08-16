"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SermonPlayer from "@/components/SermonPlayer";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

export default function Aboutus() {
  return (
    <section className="py-16 bg-gray-100">
      <motion.h2
          className="text-2xl md:text-4xl font-normal mb-4 text-center text-blue-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About us
        </motion.h2>
        <h4 className="text-center text-2xl font-nomrmal text-gray-700 mb-10">
            A place to belong, believe, and become
          </h4>
      
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg max-h-72 md:max-h-96 overflow-hidden shado">
            <ImageSlider />
            {/* image  <Image 
              src="/images/GDPAtjUXEAAT9hI.jpg"
              alt="Church worship"
              width={600}
              height={400}
              className="w-full  object-cover"
            />
            */}
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Intro 
        <div className="text-left">
                  <h1 className="max-w-7xl text-xl md:text-2xl font-bold text-yellow-600 mb-2">
                    Welcome to Shammah Gospel Church<span className=""></span>
                  </h1>
                  <p className="italic text-lg font-semibold text-blue-900">
                    Join us every Sunday at 10 AM for worship and fellowship.
                  </p>
        </div>
*/}
          
          

          <p className="text-gray-700 leading-relaxed">
          </p>
          <h2 className="text-lg md:text-2xl font-normal text-blue-700 mb-2 mt-4">Who we are</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We are passionate about sharing the love
            of Christ, teaching the Word of God with clarity, and building a
            strong community of believers rooted in faith, hope, and love.
          </p>
           <p className="text-gray-700 leading-relaxed">
            Join us every Sunday at 10 AM for worship and fellowship
          </p>
          <h2 className="hidden md:flex text-lg md:text-2xl font-normal text-blue-700 mb-2 mt-4">Our Mission</h2>
                    <p className="hidden md:flex text-gray-700 mb-4 leading-relaxed">
                      To equip people spiritually and practically to live
            victorious lives through Christ. Whether you're new to church or
            seeking a spiritual home, you are welcome here.
                    </p>
          <div className="flex gap-3 mt-10">
                      <Link
                        href="/visit"
                        className="bg-red-700 text-white px-10 w-full text-center py-3 rounded-2xl font-medium hover:bg-blue-700 transition"
                      >
                        learn more...
                      </Link>
                      <Link
                        href="/live"
                        className="bg-red-600 text-white px-10 w-full text-center py-3 rounded-2xl font-medium hover:bg-blue-600 transition"
                      >
                        Join us
                      </Link>
                    </div>
        </motion.div>

        
      </div>
    </section>
  );
}
