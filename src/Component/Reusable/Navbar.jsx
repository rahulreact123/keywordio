import React from "react";
import "./reusable.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigator = useNavigate();
  return (
    <nav className="nav-container">
      <h1>App Logo</h1>
      <div>
        <ul className="nav-links">
          <li onClick={() => navigator("/")}>Dashboard</li>
          <li onClick={() => navigator("/createads")}>Create ads</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
