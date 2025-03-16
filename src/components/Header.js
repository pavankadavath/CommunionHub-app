import React from 'react';
import './Header.css'; 
import logo from '../Assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Communion App Logo" onClick={() => navigate('/')} />
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/events">Events</Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/events">Festivals</Link>
                </li>
                <li>
                  <Link to="/events">Social</Link>
                </li>
                {/* <li>
                  <Link to="/events/charity">Charity</Link>
                </li> */}
                <li>
                  <Link to="/events">Contests</Link>
                </li>
                <li>
                  <Link to="/register">Add Event</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
