import React, { useEffect, useRef, useState, memo } from "react";
import Videos from "../components/videos";

const VideoDetail = memo((props) => {
  const [isActive, setIsActive] = useState(false);
  const videoDescription = useRef();
  const { location, history } = props;
  const moreBtn = useRef();

  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
    setIsActive(false);
  }, [location.state]);

  const handleClickMoreBtn = () => {
    setIsActive(!isActive);
  };

  if (location.state) {
    const { id, title, description, videos } = location.state;
    console.log(`videoDetail : ${id}`);
    return (
      <div className="videoDetail">
        <div className="videoDetail-videoBox">
          <iframe
            className="videoDetail-video"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="videoDetail-info">
            <div className="videoDetail-info-title">{title}</div>
            <pre
              className={
                "videoDetail-info-description " +
                (isActive ? `active` : `inactive`)
              }
              ref={videoDescription}
            >
              {description}
            </pre>
            <span
              className="moreBtn"
              ref={moreBtn}
              onClick={handleClickMoreBtn}
            >
              {isActive ? `간략히` : `더보기`}
            </span>
          </div>
        </div>
        <div className="videoDetail-videos">
          <Videos videos={videos} />
        </div>
      </div>
    );
  } else {
    return null;
  }
});

export default VideoDetail;
