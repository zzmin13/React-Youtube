import React, { memo } from "react";
import Video from "../video/video";
// import styles from "./videos.module.css";

const Videos = memo((props) => {
  const { videos } = props;
  console.log(`videos`);
  console.log(videos);

  return videos.map((video) => {
    return <Video key={video.id} videos={videos} video={video} />;
  });
});

export default Videos;
