import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { lovedTranslations } from "../content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.5, delayChildren: 0.3 } },
};

const line = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function YouAreSoLoved() {
  const navigate = useNavigate();

  return (
    <div className="page loved-page">
      <motion.div
        className="loved-list"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {lovedTranslations.map((t, i) => (
          <motion.div key={i} className="loved-line" variants={line}>
            <span className="loved-text">{t.text}</span>
            <span className="loved-lang">{t.lang}</span>
          </motion.div>
        ))}
      </motion.div>

      <button className="page-next" onClick={() => navigate("/ending")}>
        next →
      </button>
    </div>
  );
}