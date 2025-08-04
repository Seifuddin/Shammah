"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function GivingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: "Tithe",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      // Replace this with your actual API POST endpoint
      const res = await fetch("/api/give", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Thank you for your generosity!");
        setFormData({
          name: "",
          email: "",
          amount: "",
          purpose: "Tithe",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error. Please try again later.");
    }
  };

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800 text-center mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Give a Tithe or Offering
        </motion.h2>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Amount (KES)</label>
            <input
              type="number"
              name="amount"
              required
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Purpose</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="Tithe">Tithe</option>
              <option value="Offering">Offering</option>
              <option value="Seed">Seed</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700 mb-1">Message (Optional)</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Submit Giving
          </button>

          {status && <p className="text-center mt-4 text-gray-700">{status}</p>}
        </form>
      </div>
    </section>      
  );
}
 