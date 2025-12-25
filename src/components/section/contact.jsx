import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaCommentAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-medium tracking-wider uppercase text-sm border border-cyan-500/30 px-4 py-1 rounded-full bg-cyan-500/5">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 font-orbitron">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

          {/* Left Column: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="p-8 rounded-3xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Let's Collaborate</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Looking for a developer to bring your idea to life?
                I'm available for freelance work and open to new opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-cyan-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Email</p>
                    <p className="font-medium">subastianhambali@gmail.com</p>
                  </div>
                </div>
                {/* Add more info if needed */}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm relative overflow-hidden group">
              {/* Form Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative">
                  <label className="text-gray-400 text-sm font-medium mb-2 block">Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="relative">
                  <label className="text-gray-400 text-sm font-medium mb-2 block">Email</label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-950 border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6 relative">
                <label className="text-gray-400 text-sm font-medium mb-2 block">Message</label>
                <div className="relative">
                  <FaCommentAlt className="absolute left-4 top-6 text-gray-500" />
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-950 border border-gray-800 rounded-xl py-4 pl-12 pr-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </button>

              {/* Success Message */}
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-0 left-0 w-full h-full bg-gray-900/95 flex flex-col items-center justify-center z-20 backdrop-blur-md"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 text-3xl mb-4 border border-green-500/50">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                </motion.div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
