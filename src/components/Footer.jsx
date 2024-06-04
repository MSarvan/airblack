import React from "react";
import "../styles/Footer.scss";
import socialMedia from "../images/socialMedia.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-bg">
        <div className="footer-container">
          <div className="alumni-text">
            Join our growing <br /> community of <br /> 35,000+ alumni
          </div>
          <button className="apply-now-btn">Apply Now</button>
          <div className="social-media-img">
            <img src={socialMedia} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
