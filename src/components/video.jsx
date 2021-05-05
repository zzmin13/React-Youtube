import React from "react";
import "../css/video.css";
const Video = (props) => {
  const {
    snippet: { title, description },
    thumbnails,
  } = props;
  const imgURL = thumbnails.url;
  return (
    <div className="video">
      <div className="video-thumbnail-box">
        <img src={imgURL} alt={title} className="video-thumbnail-img" />
      </div>
      <h1 className="video-title">{title}</h1>
      {/* <h2>{description}</h2> */}
    </div>
  );
};

export default Video;
