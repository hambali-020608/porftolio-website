import { useState } from 'react';
import { motion } from 'motion/react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
        viewport={{ once: false }} // Ensure animation happens only once when the component is in view
        className="bg-gray-800 p-10 rounded-xl shadow-xl w-full max-w-lg space-y-6 transform transition-all"
      >
        <h2 className="text-4xl font-extrabold text-center text-white">Contact Me</h2>
        <p className="text-center text-gray-300">I’d love to hear from you. Fill out the form below to get in touch!</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 mt-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300 bg-gray-700 transition duration-300"
                placeholder="Your Full Name"
                whileFocus={{ scale: 1.05 }}
              />
            </motion.div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 mt-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300 bg-gray-700 transition duration-300"
                placeholder="Your Email Address"
                whileFocus={{ scale: 1.05 }}
              />
            </motion.div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FaComment className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 pl-12 mt-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-300 bg-gray-700 transition duration-300"
                rows="4"
                placeholder="Your Message"
                whileFocus={{ scale: 1.05 }}
              />
            </motion.div>
          </div>

          <div className="relative">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none transition duration-300 transform hover:scale-105 disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
            >
              {isSubmitting ? (
                <span className="flex justify-center items-center">
                  <svg
                    className="animate-spin mr-3 w-5 h-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 1116 0A8 8 0 014 12z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </div>

          {isSuccess !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`mt-4 text-center font-medium ${isSuccess ? 'text-green-600' : 'text-red-600'}`}
            >
              {isSuccess ? 'Message sent successfully!' : 'There was an error sending your message.'}
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
