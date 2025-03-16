import React, { useState } from 'react';
import './Header.css';
import logo from '../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Communion App Logo" onClick={() => navigate('/')} />
        </div>

        {/* Hamburger Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* Navbar Links */}
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
              <ul className="dropdown-menu">
                <li><Link to="/events" onClick={() => setMenuOpen(false)}>Festivals</Link></li>
                <li><Link to="/events" onClick={() => setMenuOpen(false)}>Social</Link></li>
                <li><Link to="/events" onClick={() => setMenuOpen(false)}>Contests</Link></li>
                <li><Link to="/register" onClick={() => setMenuOpen(false)}>Add Event</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
