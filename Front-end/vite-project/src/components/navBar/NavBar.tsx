import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Badge_of_the_Israel_Defense_Forces.new.svg/662px-Badge_of_the_Israel_Defense_Forces.new.svg.png" 
          alt="Military Logo" 
          className="navbar-logo" 
        />
        <h1 className="navbar-title">מנילה צבאית</h1>
        <div className="navbar-links">
          <a className="navbar-link">צור קשר</a>
          <a className="navbar-link">תפריט מנות קרב</a>
          <a className="navbar-link">מה חדש?</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
