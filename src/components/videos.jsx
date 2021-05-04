import React from "react";
import Video from "./video";

const Videos = (props) => {
  const { videos } = props;
  return (
    <div className="videos-container">
      {videos.map((video) => (
        <Video key={video.id} snippet={video.snippet} />
      ))}
    </div>
  );
};

export default Videos;
