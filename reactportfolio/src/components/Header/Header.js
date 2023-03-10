import React from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";

function Header() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <NavLink
          to="/home"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Experience
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/projectgallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          ProjectGallery
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>

    </ul>
  );
}

export default Header;
