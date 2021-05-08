import React, { memo } from "react";
import { Link } from "react-router-dom";

const Video = memo((props) => {
  const displayVisible = {
    display: "",
  };
  const {
    id,
    videos,
    snippet: { title, description, channelTitle },
    thumbnails,
  } = props;
  const imgURL = thumbnails.url;
  console.log(`video : ${id}`);
  return (
    <Link
      to={{
        pathname: `/video/${id}`,
        state: {
          id,
          title,
          description,
          thumbnails,
          videos,
          channelTitle,
        },
      }}
    >
      <div className="video">
        <div className="video-thumbnail-box">
          <img src={imgURL} alt={title} className="video-thumbnail-img" />
          <div style={{ display: "" }} className="video-thumbnail-hoverBox">
            <i class="far fa-play-circle playIcon"></i>
            <span>지금 재생</span>
          </div>
        </div>
        <h1 className="video-title">{title}</h1>
        <h6>{channelTitle}</h6>
      </div>
    </Link>
  );
});

export default Video;
