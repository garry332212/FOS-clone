import React from "react";

function VideoPlayer({ videoRef }) {
  return (
    <>
      <video
        className="player"
        src="https://fleetonstreet.com/wp-content/uploads/2023/03/Capture-Leads-5.mp4"
        controls
        ref={videoRef}
        controlsList="nodownload"
      ></video>
    </>
  );
}

export default VideoPlayer;
