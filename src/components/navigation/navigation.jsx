import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
const Navigation = memo((props) => {
  console.log(`navigation`);
  // game: videoCategoryId : 20
  // music : 10
  return (
    <ul className="navigation">
      <li className="navigation-itemBox">
        <Link to="/" className="navigation-item">
          <i className="fas fa-home"></i>
          <span>홈</span>
        </Link>
      </li>
      <li className="navigation-itemBox">
        <Link to="/popular/sport" className="navigation-item">
          <i className="far fa-futbol"></i>
          <span>스포츠</span>
        </Link>
      </li>
      <li className="navigation-itemBox">
        <Link to="/popular/education" className="navigation-item">
          <i className="fas fa-book-open"></i>
          <span>교육</span>
        </Link>
      </li>
      <li className="navigation-itemBox">
        <Link to="/popular/news" className="navigation-item">
          <i className="far fa-newspaper"></i>
          <span>뉴스</span>
        </Link>
      </li>
      <li className="navigation-itemBox">
        <Link to="/popular/comedy" className="navigation-item">
          <i className="fas fa-theater-masks"></i>
          <span>코미디</span>
        </Link>
      </li>
    </ul>
  );
});
export default Navigation;
