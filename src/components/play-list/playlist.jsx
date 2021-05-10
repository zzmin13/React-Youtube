import React from "react";
import PlayItem from "../play-item/playitem";
import styles from "./playlist.module.css";
const PlayList = (props) => {
  const { videos } = props;
  return (
    <ul className={styles.videos}>
      {videos.map((video) => {
        return <PlayItem key={video.id} video={video} videos={videos} />;
      })}
    </ul>
  );
};

export default PlayList;
