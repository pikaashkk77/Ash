import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 


const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      
      <i className="fas fa-bars menu-open-icon" onClick={openMenu}></i>

      
      <div id="sidemenu" className={menuOpen ? 'open' : 'closed'}>
        <i className="fas fa-times close-icon" onClick={closeMenu}></i> 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/book-tickets">Book Tickets</Link></li>
          <li><Link to="/admin-login">Admin Login</Link></li> 
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;