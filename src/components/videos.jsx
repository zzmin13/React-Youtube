import React from "react";
import Video from "./video";

const Videos = (props) => {
  const { videos } = props;
  return (
    <div className="videos-container">
      {videos.map((video, index, videos) => {
        if (video.snippet.thumbnails.maxres) {
          return (
            <Video
              key={video.id}
              id={video.id}
              videos={videos}
              snippet={video.snippet}
              thumbnails={video.snippet.thumbnails.maxres}
            />
          );
        } else {
          return (
            <Video
              key={video.id}
              id={video.id}
              videos={videos}
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
