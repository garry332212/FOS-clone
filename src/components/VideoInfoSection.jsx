import React from "react";
import VideoPlayer from "./VideoPlayer";
import "../CSS/VideoInfoSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const VideoInfoSection = ({playOnClick}) => {
  return (
    <>
      <div className="videoSecContainer">
        <VideoPlayer videoRef={playOnClick}/>
        <div className="cardContainerMini">
        {miniCardsData.map((items) => (
          <MiniCards
            key={items.id}
            percent={items.percent}
            title={items.title}
            icon={items.icon}
            titleCard2={items.titleCard2}
            info={items.info}
          />
        ))}
        </div>
        
      </div>
    </>
  );
};

export default VideoInfoSection;

const MiniCards = ({ percent, title, icon, titleCard2, info }) => {
  return (
    <>
      <div className="miniCards">
        <div className="cardTop">
          <div className="card">
            <h1>up to</h1>
            <span>{percent}%</span>
            <h3>{title}</h3>
          </div>
        </div>

        <div className="cardBottom">
          <div className="card">
            <div className="icon">{icon}</div>
            <h3>{titleCard2}</h3>
            <p>{info}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const miniCardsData = [
  {
    id: 1,
    percent: 30,
    title: "Faster response",
    icon: <FontAwesomeIcon icon={faArrowDown} />,
    titleCard2: "Reduce response time",
    info: "Capture job requests directly from your website or create one while on a client call. Staff and clients get notified immediately on job progress.",
  },
  {
    id: 2,
    percent: 25,
    title: "TIME SAVING",
    icon: <FontAwesomeIcon icon={faArrowDown} />,
    titleCard2: "Save Administration Time",
    info: "Reduce time you spend on scheduling jobs and searching client data, managing staff records, leaves and documents all in one place.",
  },
  {
    id: 3,
    percent: 60,
    title: "PAPER SAVING",
    icon: <FontAwesomeIcon icon={faArrowDown} />,
    titleCard2: "Reduce Paper Costs",
    info: "Enable your team to log time accurately via management app. Manage and approve timesheets and leaves online saving time and costs for paper work.",
  },
];
