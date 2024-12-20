import React, { useState } from "react";
import './navbar.css';
import './navbar.scss';
import { GiPeaceDove } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [dropdownActive, setDropdownActive] = useState(false); // State for dropdown visibility

  // Function to toggle navBar
  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  // Function to remove navBar
  const removeNavbar = () => {
    setActive('navBar');
  }

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive); // Toggle the dropdown visibility
  }

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>  PEACE<GiPeaceDove className="icon" /> HUB</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About Us</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Services</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact Us</a>
            </li>

            <div className="sign-in">
              <button className="btn" onClick={toggleDropdown}>Sign In</button>
              {/* Show dropdown if active */}
              <ul className={`dropdown ${dropdownActive ? 'active' : ''}`}>
                <li><a href="#">Therapist</a></li>
                <li><a href="#">Psychiatrist</a></li>
                <li><a href="#">Counselor</a></li>
              </ul>
            </div>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;
