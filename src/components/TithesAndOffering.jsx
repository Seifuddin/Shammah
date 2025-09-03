"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GivingForm from "./GivingForm";
import { X } from "lucide-react";

export default function TithesAndOffering() {
  const [showGivingModal, setShowGivingModal] = useState(false);
  const [showBankModal, setShowBankModal] = useState(false);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowGivingModal(false);
        setShowBankModal(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showGivingModal || showBankModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showGivingModal, showBankModal]);

  return (
    <section className=" relative z-0">
      <div className="text-center md:text-left">
        <motion.h2
          className="text-3xl text-blue-900 font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🙌 Tithes & Offerings
        </motion.h2>

        <p className="text-blue-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          “Bring the whole tithe into the storehouse, that there may be food in my house.”  
          <br /> <strong>— Malachi 3:10</strong>
        </p>

        <p className="text-gray-700 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          Your faithful giving fuels ministry, supports missions, and changes lives.  
          Thank you for being a vessel of Kingdom impact. 🌍✨
        </p>

        {/* Action Buttons */}
        <motion.div
          className="flex justify-center md:justify-start gap-6 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => setShowGivingModal(true)}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            💳 Give Online
          </button>

          <button
            onClick={() => setShowBankModal(true)}
            className="bg-gradient-to-r from-blue-950 to-blue-900 hover:from-blue-900 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            🏦 View Bank Details
          </button>
        </motion.div>
      </div>

      {/* Giving Form Modal */}
      <AnimatePresence>
        {showGivingModal && (
          <motion.div
            key="givingModal"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-8 relative overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowGivingModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
                aria-label="Close Giving Modal"
              >
                <X className="w-7 h-7" />
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
                Online Giving
              </h3>
              <GivingForm />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bank Details Modal */}
      <AnimatePresence>
        {showBankModal && (
          <motion.div
            key="bankModal"
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 relative"
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowBankModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition"
                aria-label="Close Bank Details Modal"
              >
                <X className="w-7 h-7" />
              </button>

              <h3 className="text-2xl font-bold text-blue-800 mb-6 text-center">
                Bank & Mobile Giving Details
              </h3>
              <ul className="text-gray-700 space-y-3 text-base">
                <li>
                  <strong>🏦 Bank Name:</strong> Bingwa Sacco
                </li>
                <li>
                  <strong>👥 Account Name:</strong> Shammah Gospel Church
                </li>
                <li>
                  <strong>🔢 Account Number:</strong> 36321
                </li>
                <li>
                  <strong>📱 Mpesa Paybill:</strong> 765244  
                  <span className="ml-2">| <strong>Account:</strong> Offering</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
