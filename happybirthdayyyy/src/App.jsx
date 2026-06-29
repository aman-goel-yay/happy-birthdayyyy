import { Routes, Route, Navigate } from "react-router-dom";
import FlowerBackground from "./components/FlowerBackground";
import LockScreen from "./pages/LockScreen";
import Opening from "./pages/Opening";
import WordsForYou from "./pages/WordsForYou";
import SheLoves from "./pages/SheLoves";
import WhatAreYou from "./pages/WhatAreYou";
import FriendshipWrapped from "./pages/FriendshipWrapped";
import Roast from "./pages/Roast";
import Awards from "./pages/Awards";
import OpenWhen from "./pages/OpenWhen";
import SpinTheWheel from "./pages/SpinTheWheel";
import YouAreSoLoved from "./pages/YouAreSoLoved";
import Ending from "./pages/Ending";

const UNLOCK_DATE = new Date("2026-07-02T00:00:00");

function isUnlocked() {
  // return new Date() >= UNLOCK_DATE;
  return true;
}

// Wraps every page with the flower background
function Layout({ children }) {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <FlowerBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}

// Guards routes behind the unlock date
function ProtectedRoute({ children }) {
  if (!isUnlocked()) {
    return <Navigate to="/" replace />;
  }
  return <Layout>{children}</Layout>;
}

export default function App() {
  return (
      <Routes>
        {/* Lock screen — always accessible, redirects inside if unlocked */}
        <Route
          path="/"
          element={
            isUnlocked()
              ? <Navigate to="/opening" replace />
              : <LockScreen unlockDate={UNLOCK_DATE} />
          }
        />

        {/* All real pages — locked until July 2nd */}
        <Route path="/opening"            element={<ProtectedRoute><Opening /></ProtectedRoute>} />
        <Route path="/words"              element={<ProtectedRoute><WordsForYou /></ProtectedRoute>} />
        <Route path="/things-she-loves"   element={<ProtectedRoute><SheLoves /></ProtectedRoute>} />
        <Route path="/what-are-you"       element={<ProtectedRoute><WhatAreYou /></ProtectedRoute>} />
        <Route path="/wrapped"            element={<ProtectedRoute><FriendshipWrapped /></ProtectedRoute>} />
        <Route path="/roast"              element={<ProtectedRoute><Roast /></ProtectedRoute>} />
        <Route path="/awards"             element={<ProtectedRoute><Awards /></ProtectedRoute>} />
        <Route path="/open-when"          element={<ProtectedRoute><OpenWhen /></ProtectedRoute>} />
        <Route path="/spin"               element={<ProtectedRoute><SpinTheWheel /></ProtectedRoute>} />
        <Route path="/so-loved"           element={<ProtectedRoute><YouAreSoLoved /></ProtectedRoute>} />
        <Route path="/ending"             element={<ProtectedRoute><Ending /></ProtectedRoute>} />
      </Routes>
  );
}