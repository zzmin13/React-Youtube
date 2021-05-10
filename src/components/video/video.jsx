import React, { memo, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./video.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Video = memo((props) => {
  const {
    video: {
      id,
      snippet: { title, description, channelTitle, thumbnails },
    },
    videos,
  } = props;
  const imgURL = thumbnails.medium.url;
  const locationHref = document.location.href;
  const hoverBox = useRef();
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
    <li className={styles.container}>
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
        className={styles.video}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.thumbnail}>
          <img src={imgURL} alt={title} className={styles.image} />
          <div
            ref={hoverBox}
            className={cx("hoverBox", { inactived: true }, { actived: false })}
          >
            <i className={cx("fas", "fa-arrow-right", "playIcon")}></i>
            <span>지금 재생</span>
          </div>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.channel}>{channelTitle}</p>
      </Link>
    </li>
  );
});

export default Video;
