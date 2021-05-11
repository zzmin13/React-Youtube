import React, { memo } from "react";
import Video from "../video/video";
// import styles from "./videos.module.css";

const Videos = memo(({ videos, display }) => {
  console.log(`videos`);
  return videos.map((video) => {
    return (
      <Video
        key={video.id}
        id={video.id}
        videos={videos}
        video={video}
        display={display}
      />
    );
  });
});

export default Videos;
