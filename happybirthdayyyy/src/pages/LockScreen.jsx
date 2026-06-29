import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LockScreen({ unlockDate }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = unlockDate - new Date();
    if (diff <= 0) return null;
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const t = getTimeLeft();
      if (!t) {
        clearInterval(timer);
        window.location.reload(); // unlocks the site when countdown hits 0
      } else {
        setTimeLeft(t);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="lock-screen">
      {/* ── Replace with your own background / flower animation ── */}
      <div className="lock-bg" />

      <motion.div
        className="lock-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Her name */}
        <h1 className="lock-name">
          {/* ── PUT HER NAME HERE ── */}
          ✦
        </h1>

        {/* DPS quote */}
        <p className="lock-quote">
          "We don't read and write poetry because it's cute. We read and write
          poetry because we are members of the human race."
        </p>

        {/* Countdown */}
        {timeLeft && (
          <div className="countdown">
            <div className="countdown-unit">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">days</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.hours)}</span>
              <span className="countdown-label">hours</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.minutes)}</span>
              <span className="countdown-label">minutes</span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-number">{pad(timeLeft.seconds)}</span>
              <span className="countdown-label">seconds</span>
            </div>
          </div>
        )}

        <p className="lock-hint">something is waiting for you.</p>
      </motion.div>
    </div>
  );
}