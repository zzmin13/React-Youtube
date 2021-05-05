import React, { useEffect, useState } from "react";
import "../app.css";
import "@fortawesome/fontawesome-free/js/all.js";
import axios from "axios";
import dotenv from "dotenv";
import Navbar from "../components/navbar";
import Videos from "../components/videos";
import "../css/videos.css";
dotenv.config();

function Home() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const getVideos = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=KR&key=${API_KEY}`
      );
      setVideos((videos) => response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []); // 빈 배열을 전달하는 이유는 마운트 되었을 때 한번만 비디오를 불러오기 위해서 이다.

  return <>{isLoading ? <h1>Loading...</h1> : <Videos videos={videos} />}</>;
}

export default Home;
