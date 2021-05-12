import React, { memo, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./video.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Video = memo((props) => {
  const {
    video: {
      snippet: { title, description, channelTitle, thumbnails },
    },
    id,
    videos,
    display,
  } = props;

  const imgURL = thumbnails.medium.url;
  const locationHref = document.location.href;
  const hoverBox = useRef();
  const displayType = display === "list" ? styles.list : styles.grid;
  const handleMouseEnter = () => {
    hoverBox.current.className = cx(
      "hoverBox",
      { inactived: false },
      { actived: true }
    );
  };
  const handleMouseLeave = () => {
    hoverBox.current.className = cx(
      "hoverBox",
      { inactived: true },
      { actived: false }
    );
  };
  console.log(`video : ${id}`);
  return (
    <li className={`${styles.container} ${displayType}`}>
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
        className={`${styles.video} ${displayType}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${styles.thumbnail} ${displayType}`}>
          <img src={imgURL} alt={title} className={styles.image} />
          <div
            ref={hoverBox}
            className={cx("hoverBox", { inactived: true }, { actived: false })}
          >
            <i className={cx("fas", "fa-arrow-right", "playIcon")}></i>
            <span>지금 재생</span>
          </div>
        </div>
        <div className={`${styles.metadata} ${displayType}`}>
          <p className={styles.title}>{title}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </Link>
    </li>
  );
});

export default Video;
