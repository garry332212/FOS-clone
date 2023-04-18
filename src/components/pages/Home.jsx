import React from "react";
import '../../CSS/Home.css'
import InfoSection from "../InfoSection";
import screenshot from "../../assets/coverSection.PNG";
import VideoInfoSection from "../VideoInfoSection";


const Home = () => {
  const videoRef = React.useRef(null);
  //knowMore Button
  const knowMore = () => {
    window.open("https://fleetonstreet.com/management-app/");
  };

  //Watch Demo Button
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-section");
    videoSection.scrollIntoView({ behavior: "smooth" });
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <>
      <div className="container">
        <h1>Manage Anything from Anywhere</h1>
        <h2>Leads, Clients, Jobs, Staff, Timesheets and more.</h2>
        <p>
          Securely hosted on the Cloud and free to download iOS and Android app.
        </p>

        <div className="buttons">
          <button onClick={knowMore}>Know More ➡</button>
          <button onClick={scrollToVideo}>Watch Demo ➡</button>
        </div>
      </div>

      <div className="newContainer">
        <img src={screenshot} alt="" />
      </div>

      <InfoSection />
      <div id="video-section">
        <VideoInfoSection playOnClick={videoRef} />
      </div>
      
    </>
  );
};

export default Home;
