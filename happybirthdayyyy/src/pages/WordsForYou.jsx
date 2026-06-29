import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { words } from "../content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function WordsForYou() {
  const navigate = useNavigate();

  return (
    <div className="page words-page">
      <motion.div
        className="words-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {words.map((word, i) => (
          <motion.span key={i} className="word-item" variants={item}>
            {word}
          </motion.span>
        ))}
      </motion.div>

      <button className="page-next" onClick={() => navigate("/things-she-loves")}>
        next →
      </button>
    </div>
  );
}