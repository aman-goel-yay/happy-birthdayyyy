import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { wheelItems } from "../content";

export default function SpinTheWheel() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  function spin() {
    if (spinning) return;
    setSpinning(true);
    setResult(null);

    // spin a random number of full turns, then land
    const extraTurns = 4 + Math.floor(Math.random() * 3); // 4-6 full spins
    const newRotation = rotation + extraTurns * 360 + Math.floor(Math.random() * 360);
    setRotation(newRotation);

    setTimeout(() => {
      const pick = wheelItems[Math.floor(Math.random() * wheelItems.length)];
      setResult(pick);
      setSpinning(false);
    }, 2200); // matches transition duration below
  }

  return (
    <div className="page spin-page">
      <h1 className="page-title">spin the wheel</h1>
      <p className="page-subtitle">a random thing, just because.</p>

      <motion.div
        className="wheel"
        animate={{ rotate: rotation }}
        transition={{ duration: 2.2, ease: "easeOut" }}
      >
        ✦
      </motion.div>

      <button className="btn-ghost spin-button" onClick={spin} disabled={spinning}>
        {spinning ? "spinning..." : "spin"}
      </button>

      {result && (
        <motion.p
          className="spin-result"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {result}
        </motion.p>
      )}

      <button className="page-next" onClick={() => navigate("/so-loved")}>
        next →
      </button>
    </div>
  );
}