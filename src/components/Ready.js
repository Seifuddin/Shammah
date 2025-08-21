"use client";

import React from 'react'
import { motion } from "framer-motion";


export default function Ready() {
  return (
    <div className='relative p-3 md:p-5 bg-white'>
        <div className='relative'>
            {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-blue-900 text-white py-12 px-6 rounded-2xl text-center"
                    >
                      <h2 className="text-center text-2xl md:text-5xl font-extrabold tracking-tight mb-4">
            Ready to accept Jesus today?
          </h2>
                      <p className="mt-4 md:text-lg italic">Forget the past life and start a new life at Jesus Christ Companion Ministry. We are ready to guide step by step!!!</p>
                      <a
                        href="contacts"
                        className="mt-6 inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
                      >
                        Talk to Us
                      </a>
                    </motion.div>
        </div>
    </div>
  )
}
