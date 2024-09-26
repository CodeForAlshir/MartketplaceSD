import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import './Header.css'; // Your header styles

function Header() {
  return (
    <header className="header">
      
      <div className="header-left">
        <img src="https://via.placeholder.com/30" alt="User Icon" />
        <span>Username</span>
      </div>

      <nav>
        <ul className="navbar">
          {/* Use Link component instead of <a href> */}
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/cart">Shopping Cart</Link></li>
          <li><Link to="/track-order">Track Order</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}

export default Header;
