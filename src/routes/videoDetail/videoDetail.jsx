import React, { useEffect, useRef, useState, memo } from "react";
import styles from "./videoDetail.module.css";
import classNames from "classnames/bind";
// import PlayList from "../../components/play-list/playlist"
import Videos from "../../components/videos/videos";

const cx = classNames.bind(styles);

const VideoDetail = memo((props) => {
  const [isActive, setIsActive] = useState(false);
  const videoDescription = useRef();
  const { location, history } = props;
  const moreBtn = useRef();

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
    window.scroll(0, 0);
    setIsActive(false);
  }, [location.state]);

  const handleClickMoreBtn = () => {
    setIsActive(!isActive);
  };
  if (location.state) {
    const { id, title, description, channelTitle, videos } = location.state;
    console.log(`videoDetail : ${id}`);
    return (
      <div className={styles.container}>
        <div className={styles.videoDetail}>
          <iframe
            className={styles.video}
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className={styles.metadata}>
            <div className={styles.title}>{title}</div>
            <div className={styles.channel}>
              <img
                className={styles.channel_image}
                src="https://i.imgur.com/bqCsyXb.jpg"
                alt="temp-profile"
              />
              <div className={styles.channel_text}>
                <div className={styles.channel_title}>{channelTitle}</div>
                <div className={styles.channel_subscribers}>구독자 n 명</div>
              </div>
            </div>
            <pre
              className={cx(
                "description",
                isActive ? { actived: true } : { inactived: true }
              )}
              ref={videoDescription}
            >
              {description}
            </pre>
            <span
              className={styles.moreBtn}
              ref={moreBtn}
              onClick={handleClickMoreBtn}
            >
              {isActive ? `간략히` : `더보기`}
            </span>
          </div>
        </div>
        <ul className={styles.playlist}>
          <Videos videos={videos} display="list" />
        </ul>
      </div>
    );
  } else {
    return null;
  }
});

export default VideoDetail;
