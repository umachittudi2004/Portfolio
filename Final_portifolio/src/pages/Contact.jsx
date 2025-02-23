import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/contact`, formData);
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      setResponseMessage("Failed to send message. Try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-[#171515]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg w-full"
      >
        <h2 className="text-white text-3xl font-bold text-center mb-6">Contact Me</h2>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            className="w-full bg-purple-600 text-white py-3 rounded-md font-bold text-lg shadow-md hover:bg-purple-700 transition-all"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-4 text-green-400"
          >
            {responseMessage}
          </motion.p>
        )}
        <div className="flex gap-6 mt-6 justify-center">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/uma-maheswara-rao-chittudi-15764125b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-blue-500 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-500 transition duration-300"
          >
            <FaInstagram />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
      </motion.div>

      {/* Social Media Links */}

    </div>
  );
};

export default Contact;
