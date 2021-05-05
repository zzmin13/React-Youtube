import React from "react";
import { Link } from "react-router-dom";
import "../css/video.css";
const Video = (props) => {
  const {
    snippet: { title, description },
    thumbnails,
  } = props;
  const imgURL = thumbnails.url;
  return (
    <Link
      to={{
        pathname: "/video-detail",
        state: {
          title,
          description,
          thumbnails,
        },
      }}
    >
      <div className="video">
        <div className="video-thumbnail-box">
          <img src={imgURL} alt={title} className="video-thumbnail-img" />
        </div>
        <h1 className="video-title">{title}</h1>
        {/* <h2>{description}</h2> */}
      </div>
    </Link>
  );
};

export default Video;
