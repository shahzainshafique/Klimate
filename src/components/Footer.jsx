import React from "react";
import "../css/footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <div className="right">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="bottom">
          <hr />
          <h3>
            Made with ❤ by{" "}
            <a href="linked.com/in/shahzainshafique">Shahzain Shafique</a>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
