import React, { memo } from "react";
import { Link } from "react-router-dom";
import styles from "./playitem.module.css";

const PlayItem = memo((props) => {
  const {
    video: {
      snippet: { title, description, channelTitle, thumbnails },
    },
    id,
    videos,
  } = props;
  const imgURL = thumbnails.medium.url;
  const locationHref = document.location.href;
  console.log(`play-item : ${id}`);
  return (
    <li>
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
            locationHref,
          },
        }}
        className={styles.container}
      >
        <img src={imgURL} alt={title} className={styles.image} />
        <div className={styles.metadata}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </Link>
    </li>
  );
});

export default PlayItem;
