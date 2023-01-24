import React from 'react'
import { useState } from 'react';
import "./nav.scss"
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"

const Navbar = () => {

  // toggle and close nav option for mobile view
  const [active, setActive] = useState('navBar');
  
  const showNavBar = () => {
    setActive("navBar activeNavBar");
  }

  // remobe nav bar
  const removeNav = () => {
    setActive('navBar')
  }


  // Active navigation bar
  const [transparent, setTransparent] = useState('header')
  const addBackground = () => {
    if (window.scrollY >= 10) {
      setTransparent("header activeHeader");
    } else {
      setTransparent("header");
    }
  }
  window.addEventListener("scroll", addBackground)

  // navbar navigation
  const [activeNav, setActiveNav] = useState("#");
  return (
    <section className="navBarSection">
      <div className={transparent}>
        {/* <div className="header"></div> */}
        <div className="logoDiv">
          <a href="#home" className="logo">
            <h1 className="flex">
              <FaTelegramPlane className="icon" />
              CuTravel
            </h1>
          </a>
        </div>
        {/* <div className="navBar"> */}
        {/* use react use state for active and close buttons */}
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  (activeNav === "#home" ? "active" : "#home", "navLink")
                }
              >
                Home
              </a>
            </li>

            <li className="navItem">
              <a
                href="#popular"
                onClick={() => setActiveNav("#popular")}
                className={
                  (activeNav === "#popular" ? "active" : "", "navLink")
                }
              >
                Popular
              </a>
            </li>
            <li className="navItem">
              <a
                href="#offer"
                onClick={() => setActiveNav("#offer")}
                className={
                  (activeNav === "#offer" ? "active" : "", "navLink")
                }
              >
                Offers
              </a>
            </li>
            <li className="navItem">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  (activeNav === "#about" ? "active" : "", "navLink")
                }
              >
                About
              </a>
            </li>
            <li className="navItem">
              <a
                href="#blog"
                onClick={() => setActiveNav("#blog")}
                className={
                  (activeNav === "#blog" ? "active" : "navLink",
                  "navLink")
                }
              >
                Blog
              </a>
            </li>
            {/* <li className="navItem">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  (activeNav === "#contact" ? "active" : "navLink", "navLink")
                }
              >
                Contact
              </a>
            </li> */}

            {/* <div className="headerBtns flex">
              <button className="btn loginBtn">
                <a href="#">Login</a>
              </button>
              <button className="btn loginBtn">
                <a href="#">Sign Up</a>
              </button>
            </div> */}
          </ul>
          <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
}

export default Navbar