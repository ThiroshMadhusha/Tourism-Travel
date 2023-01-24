import React, { useEffect } from "react";
import "./footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsWhatsapp } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="footer">
      <div className="secContainer container">
        <div className="logoDiv">
          <div
            data-aos="fade-up"
            data-aos-duration="2500"
            className="footerLogo"
          >
            <a href="" className="logo flex">
              <h1 className="flex">
                <FaTelegramPlane className="icon" />
                <span className="ftag">CuTravel</span>
              </h1>
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="5500"
            className="socials flex"
          >
            <ImFacebook className="logo" />
            <BsWhatsapp className="logo" />
            <AiFillInstagram className="logo" />
            <BsTwitter className="logo" />
          </div>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="2500"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="3500"
          className="footerLinks"
        >
          <span className="linkTitle">General</span>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Lands</a>
          </li>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="4500"
          className="footerLinks"
        >
          <span className="linkTitle">Contact US</span>
          <span className="phone">+94 773467723</span>
          <span className="email">cutravel@gmail.com</span>
        </div>
      </div>

      <hr className="hr" />
      <div className="copy">
        ©Thirosh Madhusha. All right reserved.
      </div>
    </section>
  );
};

export default Footer;
