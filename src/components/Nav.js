import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul role="list">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} aria-current={({ isActive }) => isActive ? "page" : undefined} aria-label="On Click">Home</NavLink></li>
        <li><NavLink to="/menu" className={({ isActive }) => isActive ? "active" : ""} aria-current={({ isActive }) => isActive ? "page" : undefined} aria-label="On Click">Menu</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} aria-current={({ isActive }) => isActive ? "page" : undefined} aria-label="On Click">About</NavLink></li>
        <li><NavLink to="/booking" className={({ isActive }) => isActive ? "active" : ""} aria-current={({ isActive }) => isActive ? "page" : undefined} aria-label="On Click">Reservations</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;