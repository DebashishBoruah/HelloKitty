import React, { useState } from "react";
import { motion } from "framer-motion";
import "./EnvelopeAnimation.css";

const EnvelopeAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowMessage(true), 800); // Show modal after animation
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowMessage(false);
  };

  return (
    <div className="envelope-container">
      {/* Envelope */}
      
      <div className="envelope" onClick={handleOpen}>
        {/* Left and Right Triangles */}
        <div className="envelope-side left-side"></div>
        <div className="envelope-side right-side"></div>

        {/* Bottom Rectangle */}
        <div className="envelope-bottom"></div>

        {/* Flap (Opens on Click) */}
        <motion.div
          className="envelope-flap"
          animate={{ rotateX: isOpen ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        ></motion.div>
      </div>

      {/* Message Modal */}
      {showMessage && (
        <div className="message-modal">
          <div className="message-content">
            <h2>💖 To Myezungla 💖</h2>
            <p>
            Your smile is the most beautiful thing I've ever seen—never stop sharing it with the world. No matter where life takes us, I'll always be by your side, loving you endlessly.❤️
            </p>
            <button className="close-button" onClick={handleClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnvelopeAnimation;
