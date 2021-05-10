import React, { memo } from "react";
import Video from "../video/video";
// import styles from "./videos.module.css";

const Videos = memo((props) => {
  const { videos } = props;
  console.log(`videos`);
  return videos.map((video) => {
    if (typeof video.id === "object") {
      return (
        <Video
          key={video.id.videoId}
          id={video.id.videoId}
          videos={videos}
          video={video}
        />
      );
    } else {
      return (
        <Video key={video.id} id={video.id} videos={videos} video={video} />
      );
    }
  });
});

export default Videos;
