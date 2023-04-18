import React from "react";
import "../../CSS/OurStory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faDiagnoses,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { batman, superman, shazam,wonderWoman,flash } from "./index";
import Form from "../Form";



const OurStory = () => {
  return (
    <>
      <div className="ourStroyContainer">
        <div className="ourCompany">
          <h2>Our Company</h2>
          <div className="info">
            <p>
              We started this business out of a storeroom next to a garage in
              2019 (so you can call us a storeroom start-up 😊). We started out
              with a goal of identifying pain points and needs of service
              businesses, that were not being addressed, keeping in mind we do
              not re-invent the wheel!{" "}
            </p>
            <p>
              After a good 10 months of researching, brainstorming and white
              boarding ideas with our friends, colleagues, and industry contacts
              from NZ, AUS, USA and Asian markets we started building the
              <span> fleetonstreet</span> prototype app. We engaged several
              businesses to work with us to validate and test ride the features
              as we built them.
            </p>

            <p>
              Fast forward to today, with tens of thousands of jobs been
              serviced and managed, thousands of clients in our database and
              hundreds of happy business users, we are on a journey to enable
              our customers manage and optimize all key processes of their
              businesses
            </p>
          </div>
        </div>
      </div>

      <div className="ourValues">
        <h2>Our Values</h2>
        <div className="info">
          <p>
            Our team is driven by these key values which have proven to
            strengthen our resolve and helped us focus on what matters the most.
            We measure our success by the growth of our people which includes
            both customers and the team
          </p>
        </div>

        <div className="cardsValues">
          {ourStoryCard.map((item) => (
            <div className="cardV" key={item.id}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p className="infoikP">{item.info}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bottomStoryConainer">
        <div className="ourTeam">
          <h2>Our Team</h2>
          <p>We are a motivated, skilled and innovative!</p>
          <p>
            An awesome team with a humble and fun attitude towards work and
            life. Reach out to us, you will find getting along with us is the
            easiest and most fun thing!{" "}
          </p>
          <div className="teamImages">
            {images.map((image) => (
              <img key={image.name} src={image.src} alt={image.name} />
            ))}
          </div>
        </div>
      </div>

      {/*//!Form */}

      <div className="formArea">
          <h1>Send us a message.</h1>
            <Form />
          </div>
    </>
  );
};

export default OurStory;

const images = [
  { name: "Batman", src: batman },
  { name: "Wonder Woman", src: wonderWoman },
  { name: "Superman", src: superman },
  { name: "Flash", src: flash },
  { name: "Shazam", src: shazam },
];

const ourStoryCard = [
  {
    id: 1,
    title: "People come first.",
    icon: <FontAwesomeIcon icon={faUserCheck} />,
    info: "The success of our business is for and by the customers and the team. People are our only real assets.",
  },
  {
    id: 2,
    title: "Imagination sprouts innovation.",
    icon: <FontAwesomeIcon icon={faDiagnoses} />,
    info: "Every idea has its merits, the challenge is to figure out which ones will move us in the right direction.",
  },
  {
    id: 3,
    title: "Imagination sprouts innovation.",
    icon: <FontAwesomeIcon icon={faCheckCircle} />,
    info: "Taking the short cut may resolve today's pain but would it help or create more problems for the future.",
  },
];
