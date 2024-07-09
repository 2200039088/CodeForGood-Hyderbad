import './Navb.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navb() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="nav justify-content-evenly nav-underline bg-dark-subtle">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="login">
            Admin
          </Link>
        </li>
        
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            onClick={toggleDropdown}
          >
            Users
          </a>
          <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
            <li>
              <Link className="dropdown-item" to="ngo">
                NGO's
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="princi">
                School Principles
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="stu">
                Students
              </Link>
            </li>
            
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Visually Impaired
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Bot">
            ChatBot
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="track">
            Track
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navb;
