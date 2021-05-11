import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import Videos from "../../components/videos/videos";
import LoadingImage from "../../components/loadingImage/loadingImage";
import styles from "./home.module.css";

function Home({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getVideos = () => {
    youtube
      .getMostPopular()
      .then((videos) => setVideos(videos))
      .then(setIsLoading(false));
  };

  useEffect(() => {
    getVideos();
  }, []); // 빈 배열을 전달하는 이유는 마운트 되었을 때 한번만 비디오를 불러오기 위해서 이다.

  console.log(`home`);
  return (
    <>
      {isLoading ? (
        <LoadingImage />
      ) : (
        <>
          <div>
            <p style={{ marginBottom: "10px" }}>인기 급상승 동영상</p>
            <ul className={styles.container}>
              <Videos videos={videos} />
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
