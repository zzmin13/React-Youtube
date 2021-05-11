import React, { useEffect, useState, memo } from "react";
import LoadingImage from "../../components/loadingImage/loadingImage";
import Videos from "../../components/videos/videos";
import styles from "../home/home.module.css";

//videoCategoryId : 27
const Education = memo(({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getVideos = () => {
    youtube
      .getCategoryVideos(27)
      .then((videos) => setVideos(videos))
      .then(setIsLoading(false));
  };

  useEffect(() => {
    getVideos();
  }, []); // 빈 배열을 전달하는 이유는 마운트 되었을 때 한번만 비디오를 불러오기 위해서 이다.

  console.log(`education`);
  return (
    <>
      {isLoading ? (
        <LoadingImage />
      ) : (
        <>
          <div>
            <p style={{ marginBottom: "10px" }}>교육 인기 동영상</p>
            <ul className={styles.container}>
              <Videos videos={videos} />
            </ul>
          </div>
        </>
      )}
    </>
  );
});

export default Education;
