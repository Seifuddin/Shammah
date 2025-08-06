"use client";
import { motion } from "framer-motion";
import { FaUsers, FaChild, FaHandsHelping } from "react-icons/fa";

export default function SupportMission() {
  return (
    <section className="w-full bg-gradient-to-r from-yellow-100 via-white to-yellow-50">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center py-16 px-4 md:px-20">
        {/* Left: Text Content */}
        <div>
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-yellow-600"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Support Our Feeding Mission
          </motion.h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Help us reach out and feed **street children and orphans** across the country.
            Your contribution brings hope and sustains lives.
            Join us in showing Christ's love through action and compassion.
          </p>

          {/* Impact Counters */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <FaUsers className="text-yellow-600 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-yellow-700">5,000+</h3>
              <p className="text-sm text-gray-600">Children Reached</p>
            </div>
            <div>
              <FaChild className="text-yellow-600 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-yellow-700">100+</h3>
              <p className="text-sm text-gray-600">Orphanages Supported</p>
            </div>
            <div>
              <FaHandsHelping className="text-yellow-600 text-3xl mx-auto mb-2" />
              <h3 className="text-xl font-semibold text-yellow-700">1,200+</h3>
              <p className="text-sm text-gray-600">Volunteers Involved</p>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-yellow-800">
                <span>Monthly Feeding Goal</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-yellow-200 rounded-full h-3">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1 text-sm font-medium text-yellow-800">
                <span>Funds Raised</span>
                <span>60%</span>
              </div>
              <div className="w-full bg-yellow-200 rounded-full h-3">
                <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-700"
          >
            Donate to Feed a Child
          </motion.button>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/IMG-20220321-WA0000.jpg"
            alt="Feeding Children"
            className="w-full h-auto object-cover max-h-96 rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
