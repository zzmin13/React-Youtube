import React, { memo } from "react";
import Video from "./video";

const Videos = memo((props) => {
  const { videos } = props;
  console.log(`videos`);
  return (
    <>
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
    </>
  );
});

export default Videos;
