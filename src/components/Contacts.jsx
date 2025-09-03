"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Building2 } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
} from "react-icons/fa";

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
    <section className="bg-gray-50 py-16 px-6">
      <h2 className="text-center text-4xl text-blue-900 font-bold mb-4">Contact Us</h2>
          <p className="text-center text-lg opacity-90 mb-10">
            We'd love to hear from you! Whether you have a prayer request, a testimony, or just want to say hello,
            our doors and hearts are always open.
          </p>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Info Section */}
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-md border h-full border-slate-300 shadow-lg p-8 space-y-6"
        >
          
          
                      <h4 className="text-xl font-bold text-blue-900 mb-6">Contact Information</h4>
                      <div className="flex items-start space-x-4 shadow-md p-1">
                        <Mail className="text-red-700 mt-1" />
                        <div>
                          <h4 className="text-blue-900 font-semibold">Email</h4>
                          <p className="text-blue-700">lapsatechnologies@gmail.com</p>
                        </div>
                      </div>
          
                      <div className="flex items-start space-x-4 shadow-md p-1">
                        <Phone className="text-red-700 mt-1" />
                        <div>
                          <h4 className="text-blue-900 font-semibold">Phone</h4>
                          <p className="text-blue-700">+254 111 608 331</p>
                        </div>
                      </div>
          
                      <div className="flex items-start space-x-4 shadow-md p-1">
                        <MapPin className="text-red-700 mt-1" />
                        <div>
                          <h4 className="text-blue-900 font-semibold">Location</h4>
                          <p className="text-blue-700">Eastern Bypass, Ruiru, Kiambu, Kenya</p>
                        </div>
                      </div>
          
                      {/* Social Media Icons */}
                      <h4 className="font-bold text-blue-800 text-lg">Follow Us</h4>
                      <div className="flex space-x-4 pt-4">
                        <a href="https://www.facebook.com/profile.php?id=61570201295782" aria-label="Facebook" className="text-blue-700 hover:text-orange-500 shadow-md p-1">
                          <FaFacebookF size={20} />
                        </a>
                        <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=v17tv48" aria-label="Instagram" className="text-pink-600 hover:text-orange-500 shadow-md p-1">
                          <FaInstagram size={20} />
                        </a>
                        <a href="https://x.com/Lapsa020?t=6Mt7tfu41Aw5JKx3vy9BwA&s=09" aria-label="Twitter" className="text-blue-400 hover:text-orange-500 shadow-md p-1">
                          <FaTwitter size={20} />
                        </a>
                        <a href="https://www.tiktok.com/@muriithi_nguru?_t=ZM-8wuMwLm6AoH&_r=1" aria-label="TikTok" className="text-black hover:text-orange-500 shadow-md p-1">
                          <FaTiktok size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/edwin-nguru-92ab23312?utm_sources=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn" className="text-blue-600 hover:text-orange-500 shadow-md p-1">
                          <FaLinkedinIn size={20} />
                        </a>
                      </div>
        </motion.div>

        {/* Right Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-md border border-slate-300 shadow-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-blue-900 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-blue-900 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-indigo-500"
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
