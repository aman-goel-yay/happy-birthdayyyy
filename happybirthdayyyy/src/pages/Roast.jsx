import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { roast } from "../content";

export default function Roast() {
  const [revealed, setRevealed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="page roast-page">
      <h1 className="page-title">the roast</h1>
      <p className="page-subtitle">you knew this was coming.</p>

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.button
            key="button"
            className="btn-ghost roast-trigger"
            onClick={() => setRevealed(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            i'm ready
          </motion.button>
        ) : (
          <motion.p
            key="roast-text"
            className="roast-text"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {roast}
          </motion.p>
        )}
      </AnimatePresence>

      <button className="page-next" onClick={() => navigate("/awards")}>
        next →
      </button>
    </div>
  );
}