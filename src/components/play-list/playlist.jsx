import React, { memo } from "react";
import PlayItem from "../play-item/playitem";
import styles from "./playlist.module.css";
const PlayList = memo((props) => {
  const { videos } = props;
  console.log(`playlist`);
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        if (typeof video.id === "object") {
          return (
            <PlayItem
              key={video.id.videoId}
              id={video.id.videoId}
              video={video}
              videos={videos}
            />
          );
        } else {
          return (
            <PlayItem
              key={video.id}
              id={video.id}
              video={video}
              videos={videos}
            />
          );
        }
      })}
    </ul>
  );
});

export default PlayList;
