import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { awards } from "../content";

export default function Awards() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const current = awards[index];
  const isLast = index === awards.length - 1;

  function next() {
    if (isLast) {
      navigate("/open-when");
    } else {
      setIndex((i) => i + 1);
    }
  }

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }

  return (
    <div className="page awards-page">
      <h1 className="page-title">the awards</h1>
      <p className="awards-progress">{index + 1} / {awards.length}</p>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="award-card"
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -25, scale: 0.97 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="award-eyebrow">and the award goes to...</p>
          <h2 className="award-title">{current.title}</h2>
          <p className="award-subtitle">{current.subtitle}</p>
          <p className="award-speech">{current.speech}</p>
        </motion.div>
      </AnimatePresence>

      <div className="award-controls">
        <button className="btn-ghost" onClick={prev} disabled={index === 0}>
          ← back
        </button>
        <button className="btn-ghost" onClick={next}>
          {isLast ? "next page →" : "next award →"}
        </button>
      </div>
    </div>
  );
}