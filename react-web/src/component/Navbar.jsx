import React, { useState } from "react";
import "../style/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from "react-router-dom";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-container">
      <div className="header">
        <h2>Advelon</h2>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <div className="list">
          <ul>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <Link to={'/services'}><li>Services</li></Link>
            <Link to={'/product'}> <li>Product</li></Link>
            <Link to={'/blog'}><li>Blogs</li> </Link>
          </ul>
        </div>
        <div className="login">
          <Link to={'/login'}><button>Login</button></Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
