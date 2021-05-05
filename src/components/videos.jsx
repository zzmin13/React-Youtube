import React from "react";
import Video from "./video";

const Videos = (props) => {
  const { videos } = props;
  return (
    <div className="videos-container">
      {videos.map((video) => {
        if (video.snippet.thumbnails.maxres) {
          return (
            <Video
              key={video.id}
              snippet={video.snippet}
              thumbnails={video.snippet.thumbnails.maxres}
            />
          );
        } else {
          return (
            <Video
              key={video.id}
              snippet={video.snippet}
              thumbnails={video.snippet.thumbnails.standard}
            />
          );
        }
      })}
    </div>
  );
};

export default Videos;
