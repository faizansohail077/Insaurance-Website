import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import logo from '../../images/logo.png'
import { FaBars } from 'react-icons/fa'
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";


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
      <div className="navbar__top">
        <Container>
          <div className="navbar__topDetails">
            <p style={{ color: 'white', paddingRight: '50px', paddingTop: '10px' }}>info@bussiness.com</p>
            <p style={{ color: 'white', paddingTop: '10px' }}>+123 12345678</p>
          </div>
        </Container>

      </div>
      <Container >
        <IconContext.Provider value={{ color: 'black' }}>

          <nav className="navbar">

            <div className="brand-title">
              <Link to='/'>
                <img src={logo} alt='logo' />
              </Link>
            </div>
            <a href="#" className="toggle-button">
              <FaBars />
            </a>
            <div className="navbar-links">
              <ul>active
            <li><Link to="/partners">Partner</Link></li>
                <li><Link to="/quote">Product</Link></li>
                <li><Link to="/promotion">Promotion</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><button>LogIn</button></li>
              </ul>
            </div>

          </nav>
        </IconContext.Provider>
      </Container>
    </div>

  );
};

export default Header;
