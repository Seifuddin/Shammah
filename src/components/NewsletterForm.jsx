"use client";
import { motion } from "framer-motion";
import { Send, Mail, Heart } from "lucide-react";
import { useState } from "react";

export default function NewsletterSignup() {
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate email API (e.9g. EmailJS, Resend, backend endpoint)
    alert("Thank you! Your request has been received.");
    setForm({ email: "", message: "" });
  };

  return (
    <section className="py-16 bg-blue-100 text-blue-900">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="mb-4 text-blue-100">
            Subscribe to our newsletter for inspirational messages, upcoming
            events, and weekly devotionals. You can also request a prayer below —
            we're here for you.
          </p>
          <ul className="text-blue-200 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@shammahgospel.org
            </li>
            <li className="flex items-center gap-2">
              <Heart size={16} /> We believe in the power of prayer.
            </li>
          </ul>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-6 shadow-lg text-gray-800"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Prayer Request (Optional)</label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Share your prayer need..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            <Send size={18} />
            Submit
          </button>
        </motion.form>
      </div>
    </section>
  );
}
