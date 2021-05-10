import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import axios from "axios";
import LoadingImage from "../../components/loadingImage/loadingImage";
import Videos from "../../components/videos/videos";

dotenv.config();

const Search = (props) => {
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const {
    location: { search },
  } = props;
  const terms = decodeURI(decodeURIComponent(search.slice(6, search.length)));
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResults = async () => {
    try {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${terms}&key=${API_KEY}`
      );
      setResults((results) => response.data.items);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getResults();
  }, []);
  console.log(`search : ${terms}`);

  return (
    <div className="search-container">
      <span className="search-text">
        <span style={{ color: "red", fontWeight: "600" }}>{terms}</span>에 대한
        검색 결과
      </span>
      {isLoading ? (
        <LoadingImage />
      ) : (
        <div className="home-videos-container">
          <Videos videos={results} />
        </div>
      )}
    </div>
  );
};

export default Search;
