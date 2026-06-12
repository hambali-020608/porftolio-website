"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [progress, setProgress] = useState(0);
    const { language } = useLanguage();
    const fullText = language === 'en' ? "Welcome to My Portfolio..." : "Selamat Datang di Portfolio Saya...";

    useEffect(() => {
        // Trigger progress bar animation
        const timer = setTimeout(() => setProgress(100), 50);

        // Typing effect logic
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsFadingOut(true);
                    setTimeout(() => {
                        onComplete();
                    }, 800); // Slightly faster fade
                }, 600); // Wait less after typing
            }
        }, 70); // Faster typing speed (was 100)

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete, fullText]);

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white transition-opacity duration-1000 ease-in-out ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        >
            {/* Code-like bracket animation */}
            <div className="mb-8 font-mono text-4xl md:text-6xl font-bold text-cyan-500">
                &lt;Hambali /&gt;
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 md:w-80 h-2 bg-gray-800 rounded-full overflow-hidden relative">
                <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-[3500ms] ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Typing Text */}
            <div className="mt-4 font-mono text-gray-400 text-sm md:text-base h-6">
                {text}
                <span className="animate-pulse">|</span>
            </div>
        </div>
    );
};

export default LoadingScreen;
