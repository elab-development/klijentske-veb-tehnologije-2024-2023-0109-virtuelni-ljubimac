import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Adopt from "./pages/Adopt";
import Care from "./pages/Care";
import Navbar from "./components/Navbar";

import "./App.css";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Postavljanje teme u <html>
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <Router>
      <Navbar />

      {/* Dark Mode Toggle */}
      <div style={{ display: "flex", justifyContent: "center", margin: "1rem 0" }}>
        <div
          className="toggle-button"
          onClick={() => setDarkMode(!darkMode)}
        >
          <span className="icon">☀️</span>
          <span className="slider"></span>
          <span className="icon">🌙</span>
        </div>
      </div>

      {/* Stranice */}
      <div style={{ padding: "0 1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/care" element={<Care />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

