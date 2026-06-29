import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizzes } from "../content";
import { useNavigate } from "react-router-dom";

export default function WhatAreYou() {
  const [activeQuiz, setActiveQuiz] = useState(null); // which quiz is open
  const [step, setStep]             = useState(0);     // current question index
  const [scores, setScores]         = useState({});    // result key → count
  const [result, setResult]         = useState(null);  // final result object
  const navigate = useNavigate();

  function startQuiz(quiz) {
    setActiveQuiz(quiz);
    setStep(0);
    setScores({});
    setResult(null);
  }

  function handleAnswer(resultKey) {
    const newScores = { ...scores, [resultKey]: (scores[resultKey] || 0) + 1 };
    setScores(newScores);

    const nextStep = step + 1;
    if (nextStep >= activeQuiz.questions.length) {
      // calculate winner
      const winner = Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0];
      setResult(activeQuiz.results[winner]);
    } else {
      setStep(nextStep);
    }
  }

  function reset() {
    setActiveQuiz(null);
    setResult(null);
    setScores({});
    setStep(0);
  }

  return (
    <div className="page quiz-page">
      <AnimatePresence mode="wait">

        {/* Quiz selection screen */}
        {!activeQuiz && (
          <motion.div
            key="selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="quiz-selection"
          >
            <h1 className="page-title">what are you?</h1>
            <p className="page-subtitle">pick one and find out.</p>

            <div className="quiz-cards">
              {quizzes.map((quiz) => (
                <motion.button
                  key={quiz.id}
                  className="quiz-card"
                  onClick={() => startQuiz(quiz)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {quiz.title}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Active question */}
        {activeQuiz && !result && (
          <motion.div
            key={`question-${step}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            className="quiz-question"
          >
            <p className="quiz-progress">
              {step + 1} / {activeQuiz.questions.length}
            </p>
            <h2 className="quiz-q-text">
              {activeQuiz.questions[step].question}
            </h2>

            <div className="quiz-options">
              {activeQuiz.questions[step].options.map((opt, i) => (
                <motion.button
                  key={i}
                  className="quiz-option"
                  onClick={() => handleAnswer(opt.result)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {opt.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Result screen */}
        {result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="quiz-result"
          >
            <p className="result-eyebrow">you are</p>
            <h2 className="result-title">{result.title}</h2>
            <p className="result-description">{result.description}</p>

            <div className="result-actions">
              <button className="btn-ghost" onClick={() => startQuiz(activeQuiz)}>
                try again
              </button>
              <button className="btn-ghost" onClick={reset}>
                try another
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* nav to next page */}
      <button className="page-next" onClick={() => navigate("/wrapped")}>
        next →
      </button>
    </div>
  );
}