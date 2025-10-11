import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Adopt from "./pages/Adopt";
import Care from "./pages/Care";
import Navbar from "./components/Navbar";
import HappyUsers from "./pages/HappyUsers";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />


      {/* Stranice */}
      <div style={{ padding: "0 1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/care" element={<Care />} />
          <Route path="/happy-users" element={<HappyUsers />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
