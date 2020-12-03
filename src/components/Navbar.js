import React, { useState } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

function Navbar() {
  const [status, setStatus] = useState(false);
  const toggleHandler = () => {
    setStatus(!status);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="Beach Resort" />
          </Link>
          <button type="button" onClick={toggleHandler} className="nav-btn">
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        <ul className={status ? "nav-links show-nav" : "nav-links"}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/rooms">
            <li>Rooms</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
