import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: "#222", color: "#fff", padding: "10px" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Pocetna</Link>
      <Link to="/login" style={{ marginRight: "15px", color: "white" }}>Login</Link>
      <Link to="/adopt" style={{ marginRight: "15px", color: "white" }}>Usvoji psa</Link>
      <Link to="/care" style={{ color: "white" }}>Briga o ljubimcu</Link>
    </nav>
  );
};

export default Navbar;

