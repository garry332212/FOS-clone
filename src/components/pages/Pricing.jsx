import React from "react";
import "../../CSS/Pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import PriceCards from "../PriceCards";
import VideoPlayer from "../VideoPlayer";

const Pricing = () => {
  return (
    <>
      <div className="priceContainer">
        <div className="section1">
          <div className="topSection">
            <h1>
              All management app plans come with these core features enabled.
            </h1>

            <ul>
              {listItems.map((item) => (
                <li key={item.text}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="icon"
                    style={{ fontWeight: "bold" }}
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="headingMiddle">
            <p>
              Sign up to try any plan free for 30 days. No Credit cards needed!{" "}
            </p>
          </div>

          <div className="bottomSection">
            <PriceCards />
          </div>
          <div className="line"></div>
        </div>
      </div>

      <div className="priceContainer">
        <div className="bottomContainerPricing">
        <h2>From capturing leads to managing time, teams and clients to sending Invoices and requesting google reviews and more!</h2>
        <h2>Fleetonstreet is your one stop shop for Business management!</h2>

        <div className="videoPlayerPricing">
          <VideoPlayer />
        </div>
        </div>
      
      </div>
    </>
  );
};
const listItems = [
  { icon: faCheck, text: "Staff management" },
  { icon: faCheck, text: "Additional Fields & Categories" },
  { icon: faCheck, text: "Reminders & Notifications" },
  { icon: faCheck, text: "Notes & Attachments" },
  { icon: faCheck, text: "Activity logs" },
  { icon: faCheck, text: "Roles management" },
  { icon: faCheck, text: "25 GB free storage" },
  { icon: faCheck, text: "Document management" },
  { icon: faCheck, text: "Free Android & iOS mobile app" },
];
export default Pricing;
