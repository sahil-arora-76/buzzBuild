import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/Assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const token = localStorage.getItem('token');
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li>
          <span to='/' onClick={() => window.location.href = '/'} className={menu === "Home" ? "active" : ""}>Home</span>
        </li>
        { token ? <li>
          <a href='/addEvent'>Add Events</a>
        </li> : null}
        <li>
          <a href='/listOfEvents' onClick={() => setMenu("List-of-Events")} className={menu === "List-of-Events" ? "active" : ""}>List of Events</a>
        </li>
        <li><a href='/contact' onClick={() => setMenu("Contact-us")} className={menu === "Contact-us" ? "active" : ""}>Contact us</a></li>
      </ul>
      <div className="navbar-right">

        {!token ? <span onClick={() => window.location.href = '/loginPopup'}>
          <button>Sign in</button>
        </span> : <button onClick={() => {
          localStorage.removeItem('token');
          window.location.reload();
        }}>Logout</button>}
      </div>
    </div>
  );
}

export default Navbar;
