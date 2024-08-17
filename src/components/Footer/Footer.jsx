import React, { useState } from "react";
import "../../css/footer.css";
import logo from "../../assets/images/logo-dark.svg"

const Footer = ({isDark}) => {
  return (
    <div id="contact" className={`footer wrapper ${isDark && "bg-card-dark"}`}>
      <div className="cta-wrapper">
        <h3 className="cta-title">Start Shopping With Us Now!</h3>
        <a href="#" className="cta footer-link">
          Shop Now
        </a>
      </div>
      <div className="footer-inner container">
        <div className="logo-address">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p className="address">123 st,Worldwide, Planet Earth</p>
        </div>
        <ul className="footer-links main">
          <li className="footer-link">Home</li>
          <li className="footer-link">Shop</li>
          <li className="footer-link">Categories</li>
          <li className="footer-link">About Us</li>
        </ul>
        <ul className="footer-links second">
          <li className="footer-link">Blog</li>
          <li className="footer-link">Press</li>
          <li className="footer-link">News</li>
          <li className="footer-link">Contact</li>

        </ul>
      </div>
    </div>
  );
};

export default Footer;
