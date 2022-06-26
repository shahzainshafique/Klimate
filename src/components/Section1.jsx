import React from "react";
import img1 from "../assets/img1.svg";
import "../css/section1.css";
import Typewriter from "typewriter-effect";
const Section1 = () => {
  return (
    <React.Fragment>
      <div className="main-text">
        <h1 className="main-heading">
          Play a part in <br />
          <span style={{ color: "rgb(42, 210, 252)" }}>
            {" "}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Saving")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Protecting")
                  .deleteAll()
                  .typeString("Reviving")
                  .start();
              }}
            />{" "}
          </span>
          the Environment!
        </h1>
        <br />
        <h3 className="main-subheading">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          sed.
        </h3>
        <br />
        <button className="btn-grad">Get Started! </button>
      </div>
      <img src={img1} className="img1" alt="image1" />
    </React.Fragment>
  );
};

export default Section1;
