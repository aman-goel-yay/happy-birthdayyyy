import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// A clickable envelope. Closed shows just the label.
// Click flips it open and reveals the text underneath.
export default function Envelope({ label, text }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`envelope ${open ? "envelope-open" : ""}`}
      layout
      onClick={() => setOpen((o) => !o)}
      whileHover={{ scale: open ? 1 : 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div className="envelope-flap" layout>
        <span className="envelope-label">{label}</span>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.p
            className="envelope-text"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}