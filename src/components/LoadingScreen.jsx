import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Portfolio...";

  useEffect(() => {
    // Typing effect logic
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
            onComplete();
        }, 1000); 
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Code-like bracket animation */}
      <div className="mb-8 font-mono text-4xl md:text-6xl font-bold text-cyan-500">
        &lt;Hambali /&gt;
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
        />
      </div>

      {/* Typing Text */}
      <div className="mt-4 font-mono text-gray-400 text-sm md:text-base h-6">
        {text}
        <span className="animate-pulse">|</span>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
