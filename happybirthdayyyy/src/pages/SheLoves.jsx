import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { thingsSheLoves } from "../content";
import Polaroid from "../components/Polaroid";

export default function SheLoves() {
  const navigate = useNavigate();

  return (
    <div className="page she-loves-page">
      <h1 className="page-title">things you love</h1>
      <p className="page-subtitle">or, things I've noticed you love.</p>

      <motion.div
        className="polaroid-grid"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {thingsSheLoves.map((thing, i) => (
          <Polaroid
            key={i}
            title={thing.title}
            text={thing.text}
            image={thing.image}
          />
        ))}
      </motion.div>

      <button className="page-next" onClick={() => navigate("/what-are-you")}>
        next →
      </button>
    </div>
  );
}