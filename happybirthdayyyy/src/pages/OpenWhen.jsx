import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { openWhens } from "../content";
import Envelope from "../components/Envelope";

export default function OpenWhen() {
  const navigate = useNavigate();

  return (
    <div className="page open-when-page">
      <h1 className="page-title">open when...</h1>
      <p className="page-subtitle">open whichever one you need. open all of them if you want.</p>

      <motion.div
        className="envelope-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {openWhens.map((ow, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <Envelope label={ow.label} text={ow.text} />
          </motion.div>
        ))}
      </motion.div>

      <button className="page-next" onClick={() => navigate("/spin")}>
        next →
      </button>
    </div>
  );
}