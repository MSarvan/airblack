import React from "react";
import "../styles/ProffesionalContainer.scss";
import certificate from "../images/cerProgram.svg";
import star from "../images/star.svg";
import tick from "../images/tick.svg";

const ProffesionalContainer = () => {
  const pointersData = [
    {
      id: "0",
      text: "India’s No.1 Online Makeup Course",
    },
    {
      id: "1",
      text: "Learn by LIVE Do-it-Together Classes",
    },
    {
      id: "2",
      text: "Unlimited Practise Session to master skills",
    },
  ];
  
  return (
    <div className="proffesional-container">
      <div className="proffesional-text">
        Proffesional Online <br /> Makeup Course
      </div>
      <div className="certificat-section">
        <div className="certificate-img">
          <img src={certificate} alt="" />
        </div>
        <div className="rating-container">
          <div className="rating-img">
            <img src={star} alt="" />
          </div>
          <div className="rating-text">Rated 4.85/5</div>
        </div>
      </div>
      <div className="pointers">
        {pointersData.map((e, i) => {
          return (
            <div className="each-pointer" key={e.id}>
              <div className="pointer-img">
                <img src={tick} alt="" />
              </div>
              <div className="pointer-text">{e.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProffesionalContainer;
