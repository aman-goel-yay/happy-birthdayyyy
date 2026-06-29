import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { wrapped } from "../content";

const stats = [
  { label: "movies watched together", value: (w) => w.moviesWatched },
  { label: "top memory", value: (w) => w.topMemory },
  { label: "favorite genre", value: (w) => w.topGenre, fallbackLabel: "what we talk about most" },
  { label: "friends since", value: (w) => w.streak },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.4, delayChildren: 0.3 } },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function FriendshipWrapped() {
  const navigate = useNavigate();

  return (
    <div className="page wrapped-page">
      <h1 className="page-title">friendship, wrapped</h1>
      <p className="page-subtitle">{wrapped.friendshipSince ? `since ${wrapped.friendshipSince}` : ""}</p>

      <motion.div
        className="wrapped-stack"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} className="wrapped-card" variants={card}>
            <p className="wrapped-value">{stat.value(wrapped)}</p>
            <p className="wrapped-label">{stat.label}</p>
          </motion.div>
        ))}

        {wrapped.mostUsedPhrase && (
          <motion.div className="wrapped-card" variants={card}>
            <p className="wrapped-value">"{wrapped.mostUsedPhrase}"</p>
            <p className="wrapped-label">said more times than either of us can count</p>
          </motion.div>
        )}
      </motion.div>

      <button className="page-next" onClick={() => navigate("/roast")}>
        next →
      </button>
    </div>
  );
}