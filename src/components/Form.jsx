import React from "react";
import "../styles/Form.scss";
import arrow from "../images/arrow.svg";

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-heading">Fill the form below to enquire</div>
        <div className="form-content">
          <div className="each-field">
            <div className="each-field-name">*Enter your name</div>
            <div className="each-field-input">
              <input type="text" placeholder="Eg. Aneesha Mehra" />
            </div>
          </div>
          <div className="each-field">
            <div className="each-field-name">*Enter your WhatsApp Number</div>
            <div className="each-field-input-partition">
              <div className="each-left-field-input">
                <input type="dropdown" placeholder="+91" />
                <div className="arrow-img">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="each-right-field-input">
                <input type="tel" placeholder="Eg. 0000000000" />
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="each-field-name">*Select your profession</div>
            <div className="each-field-input-arrow">
              <div className="placeholder-div">
                Choose the most relevant option
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="each-field-name">*Select your goal</div>
            <div className="each-field-input-arrow">
              <div className="placeholder-div">
                Choose the most relevant option
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="each-field">
            <div className="each-field-name">*Select your city</div>
            <div className="each-field-input-arrow">
              <div className="placeholder-div">
                Choose the most relevant option
              </div>
              <div>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="submit-btn-container">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
