import React from "react";
import { Link } from "react-router-dom";
import "../css/video.css";
const Video = (props) => {
  const {
    id,
    videos,
    snippet: { title, description },
    thumbnails,
  } = props;
  const imgURL = thumbnails.url;
  console.log(videos);
  return (
    <Link
      to={{
        pathname: `/video/${id}`,
        state: {
          title,
          description,
          thumbnails,
          videos,
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
