import React from "react";
import "../styles/CertificateContainer.scss";
import acheivement from "../images/acheivement.svg";
import leftArrow from "../images/leftArrow.svg";
import rightArrow from "../images/rightArrow.svg";

const CertificateContainer = () => {
  return (
    <div className="certificate-container">
      <div className="certificate-section">
        <div className="arrow-image">
          <img src={leftArrow} alt="" />
        </div>
        <div className="certificate-heading-text">
          Get Certified From <br /> India’s Biggest <br /> Beauty Platform
        </div>
        <div className="arrow-image">
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <div className="acheivement-img">
        <img src={acheivement} alt="acheivementCertificate" />
      </div>
    </div>
  );
};

export default CertificateContainer;
