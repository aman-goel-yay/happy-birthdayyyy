import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HER_NAME } from "../content";

export default function Opening() {
  const navigate = useNavigate();

  return (
    <div className="page opening-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="opening-eyebrow">happy birthday,</p>
        <h1 className="page-title">{HER_NAME || "you"}</h1>

        <motion.p
          className="opening-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I made you something. Take your time with it.
        </motion.p>
      </motion.div>

      <motion.button
        className="page-next"
        onClick={() => navigate("/words")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        begin →
      </motion.button>
    </div>
  );
}