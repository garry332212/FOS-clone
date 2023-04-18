import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="items">
          <div className="leftInfo">
            <h3>Sitemap</h3>
            <a href="https://fleetonstreet.com/management-app/">Management App</a>
            <a href="https://fleetonstreet.com/management-app/#pricingplansapp">pricing</a>
            <a href="https://fleetonstreet.com/our-story/">our story</a>
            <a href="https://fleetonstreet.com/demo/">watch demo</a>
            <a href="https://fleetonstreet.com/our-story/#contactus">contact us</a>
            <a href="https://fleetonstreet.com/terms-conditions/">terms & conditions</a>
            <a href="https://fleetonstreet.com/privacy-policy/">pricarcy policy</a>
            <a href="https://portal.fleetonstreet.com/#/login">login</a>
          </div>

          <div className="middleInfo">
            <h3>Contact info</h3>
            <h4>Email:</h4>
            <p>support@fleetonstreet.com</p>
            <h4>Postal Address</h4>
            <p>
              9 Vintry Drive, Kumeu Auckland <br />
              New Zealand – 0891
            </p>
          </div>

          <div className="rightInfo">
            <h3>Simplifying your business</h3>
            <img
              src="https://fleetonstreet.com/wp-content/uploads/2021/03/Untitled-design-300x169.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="copyrightArea">
        <p>Copyright © 2023 fleetonstreet limited – OnePress theme by FameThemes</p>
      </div>
    </>
  );
};

export default Footer;
