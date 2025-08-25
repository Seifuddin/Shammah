"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactFm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fake API call simulation
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 py-16 px-6">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="text-lg opacity-90">
            We'd love to hear from you! Whether you have a prayer request, a testimony, or just want to say hello,
            our doors and hearts are always open.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3"><MapPin className="w-5 h-5" /> 123 Church Street, Nairobi, Kenya</p>
            <p className="flex items-center gap-3"><Phone className="w-5 h-5" /> +254 712 345 678</p>
            <p className="flex items-center gap-3"><Mail className="w-5 h-5" /> contact@church.org</p>
          </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-md hover:opacity-90 transition"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="text-green-600 font-medium mt-3 text-center">✅ Message sent successfully!</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
