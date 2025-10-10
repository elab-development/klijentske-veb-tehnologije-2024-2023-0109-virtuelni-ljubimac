import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Adopt from "./pages/Adopt";
import Care from "./pages/Care";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ border: "3px solid lightblue", padding: "20px" }}>
        <Navbar />
        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/care" element={<Care />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
