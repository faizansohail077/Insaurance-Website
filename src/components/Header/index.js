import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import logo from '../../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";


const Header = () => {
  const [click, setClick] = useState(false)


  useEffect(() => {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    toggleButton.addEventListener('click', () => {
      console.log('object')
      navbarLinks.classList.toggle('active')
    })

  }, [])

  return (

    <div style={{ width: '100%' }}>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className="navbar__top">
          <div className="navbar__topDetails">
            <p style={{ color: 'white', paddingRight: '50px', paddingTop: '10px' }}>info@bussiness.com</p>
            <p style={{ color: 'white', paddingTop: '10px' }}>+123 12345678</p>
          </div>

        </div>
        <nav className="navbar">

          <div className="brand-title">
            <img src={logo} alt='logo' />
          </div>
          <a href="#" className="toggle-button">
            <FaBars />
          </a>
          <div className="navbar-links">
            <ul>active
            <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Contact</a></li>
              <li><button>LogIn</button></li>
            </ul>
          </div>

        </nav>
      </IconContext.Provider>
    </div>

  );
};

export default Header;
