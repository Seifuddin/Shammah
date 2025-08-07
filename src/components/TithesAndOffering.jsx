"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GivingForm from "./GivingForm";

export default function TithesAndOffering() {
  const [showGivingModal, setShowGivingModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);

  return (
    <section className="bg-gradient-to-b from-blue-100 via-white to-blue-100 py-16 px-6 sm:px-10 lg:px-20 relative z-0">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tithes & Offerings
        </motion.h2>

        <p className="text-blue-700 text-lg mb-6 max-w-2xl mx-auto">
          “Bring the whole tithe into the storehouse, that there may be food in my house.” — <strong>Malachi 3:10</strong>
        </p>

        <p className="text-gray-700 text-md mb-8">
          Your faithful giving helps spread the gospel, support church ministries, and serve our community.
          Thank you for partnering with us in the Kingdom work.
        </p>

        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowGivingModal(true)}
            className="bg-blue-600 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
          >
            Give Online
          </button>

          <button
            onClick={() => setShowBankModal(true)}
            className="bg-yellow-600 border text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View Bank Details
          </button>
        </motion.div>
      </div>

      {/* Giving Form Modal */}
      <AnimatePresence>
        {showGivingModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-2xl w-full mx-4 rounded-xl shadow-lg p-6 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowGivingModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Giving Form</h3>
              <GivingForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bank Details Modal */}
      <AnimatePresence>
        {showBankModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white max-w-md w-full mx-4 rounded-xl shadow-lg p-6 relative"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowBankModal(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>

              <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">Bank / Mobile Giving Details</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Bank Name:</strong> Bingwa Sacco</li>
                <li><strong>Account Name:</strong> Shammah Gospel Church</li>
                <li><strong>Account Number:</strong> 36321</li>
                <li><strong>Mpesa Paybill:</strong> 765244 &nbsp; | &nbsp; <strong>Account:</strong> Offering</li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
