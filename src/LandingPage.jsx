import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingPage() {
    const [isEntering, setIsEntering] = useState(false);

    const handleStartClick = () => {
        setIsEntering(true);

        // Delay navigation slightly to allow preloader to take effect
        setTimeout(() => {
            window.location.href = "/personal-ps2-portfolio/intro/intro.html";
        }, 1800); // Increased to 1.5s for a better transition
    };

    return (
        <div className="landing-container">
            <motion.img
                src="/personal-ps2-portfolio/audible.png"
                alt="Irfan's Photo"
                className="landing-image"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <motion.div
                className="landing-text"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            >
                <h1>Hello! 👋</h1>
                <p>Welcome to my portfolio, inspired by Sony's PlayStation 2.</p>
            </motion.div>

            <motion.button
                className="start-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleStartClick}
            >
                Enter Portfolio
            </motion.button>

            {/* Black screen fade-out when entering */}
            {isEntering && (
                <motion.div
                    className="fade-out"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            )}
        </div>
    );
}