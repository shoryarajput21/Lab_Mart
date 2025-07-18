import React, { useState } from 'react';

import './Navbar.css';


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="https://tse4.mm.bing.net/th/id/OIP.kpAg6_oxwb3kfiYKDeJlVwHaHa?pid=Api&P=0&h=180" alt="logo" />
        <h1>Labotronics</h1>
      </div>

      <input 
        type="text"
        placeholder="Search product here"
        className="search-input"
      />

      {/* ✅ Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* ✅ Menu links (toggle show/hide) */}
      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">All Equipment</a>
        <a href="#">Laboratory Equipment</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="navbar-contact">
        <p>📞 +1 579 401 0534</p>
        <p>📧 info@labotronics.com</p>
      </div>
    </nav>
  );
}
