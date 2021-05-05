import React, { useEffect } from "react";
import Videos from "../components/videos";
import Home from "./home";

const VideoDetail = (props) => {
  const { location, history } = props;
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);
  console.log(props);
  if (location.state) {
    return (
      <>
        <h1>{location.state.title}</h1>
        <Videos videos={location.state.videos} />
      </>
    );
  } else {
    return null;
  }
};

export default VideoDetail;
