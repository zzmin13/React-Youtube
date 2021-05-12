import React, { useEffect, useState } from "react";
import LoadingImage from "../../components/loadingImage/loadingImage";
import Videos from "../../components/videos/videos";
import "./search.css";

const Search = (props) => {
  const { youtube, location } = props;
  const terms = location.pathname.slice(8, location.pathname.length);
  const [params, setParams] = useState(terms);

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getResults = (terms) => {
    youtube
      .getSearch(terms) //
      .then((results) => setResults(results))
      .then(setIsLoading(false));
  };
  useEffect(() => {
    getResults(terms);
  }, [location.pathname]);

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
        <ul className="video-container">
          <Videos videos={results} />
        </ul>
      )}
    </div>
  );
};

export default Search;
