import { motion } from "framer-motion";
import { endingLine, colophon } from "../content";

export default function Ending() {
  return (
    <div className="page ending-page">
      <motion.p
        className="ending-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {endingLine}
      </motion.p>

      <motion.p
        className="colophon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {colophon}
      </motion.p>
    </div>
  );
}