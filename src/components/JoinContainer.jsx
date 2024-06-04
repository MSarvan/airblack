import React from "react";
import "../styles/JoinContainer.scss";
import leftArrow from "../images/leftArrow.svg";
import righttArrow from "../images/rightArrow.svg";
import join from "../images/joinImage.svg";

const JoinContainer = () => {
  return (
    <div className="join-container">
      <div className="join-bg">
        <div className="join-content">
          <div className="join-heading">
            <div className="arrow-image">
              <img src={leftArrow} alt="" />
            </div>
            <div className="join-heading-text">
              Why Should You <br /> Join Airblack?
            </div>
            <div className="arrow-image">
              <img src={righttArrow} alt="" />
            </div>
          </div>
          <div className="join-image">
            <img src={join} alt="" />
          </div>
          <button className="apply-now-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JoinContainer;
