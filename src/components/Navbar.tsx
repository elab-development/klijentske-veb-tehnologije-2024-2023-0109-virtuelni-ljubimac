import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Početna</Link>
        <Link to="/login">Login</Link>
        <Link to="/adopt">Usvoji psa</Link>
        <Link to="/care">Briga o ljubimcu</Link>
        <Link to="/happy-users">Zadovoljni korisnici</Link>

      </div>
    </nav>
  );
};

export default Navbar;


