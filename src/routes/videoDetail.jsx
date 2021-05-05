import React, { useEffect } from "react";

const VideoDetail = (props) => {
  const { location, history } = props;
  //   console.log(props);
  useEffect(() => {
    if (location.state === undefined) {
      history.push("/");
    }
  }, []);

  if (location.state) {
    return <h1>{location.state.title}</h1>;
  } else {
    return null;
  }
};

export default VideoDetail;
