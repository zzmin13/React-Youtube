import React from "react";
import "../css/video.css";
const Video = (props) => {
  const {
    snippet: {
      title,
      description,
      thumbnails: { maxres, standard },
    },
  } = props;
  const imgURL = maxres ? maxres.url : standard.url;
  if (maxres) {
    return (
      <div className="video">
        <div className="video-thumbnail">
          <img src={imgURL} alt={title} className="video-thumbnail-img" />
        </div>
        <h1 className="video-title">{title}</h1>
        {/* <h2>{description}</h2> */}
      </div>
    );
  } else {
    return (
      <div className="video">
        <div className="video-thumbnail">
          <img src={imgURL} alt={title} className="video-thumbnail-img-crop" />
        </div>
        <h1 className="video-title">{title}</h1>
        {/* <h2>{description}</h2> */}
      </div>
    );
  }
};

export default Video;
