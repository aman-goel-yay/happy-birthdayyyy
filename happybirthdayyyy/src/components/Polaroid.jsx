import { motion } from "framer-motion";
import { useState } from "react";

// A "polaroid" card — optional image, title, and a line of text.
// Pass a fixed `rotate` value per item if you want consistent tilts,
// otherwise it'll pick a small random one once on mount.
export default function Polaroid({ title, text, image, rotate }) {
    const [tilt] = useState(() => rotate ?? (Math.random() * 6 - 3));

  return (
    <motion.div
      className="polaroid"
      initial={{ opacity: 0, y: 20, rotate: tilt }}
      animate={{ opacity: 1, y: 0, rotate: tilt }}
      whileHover={{ rotate: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {image && (
        <div className="polaroid-image-wrap">
          <img src={image} alt={title} className="polaroid-image" />
        </div>
      )}
      <h3 className="polaroid-title">{title}</h3>
      <p className="polaroid-text">{text}</p>
    </motion.div>
  );
}