import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = memo((props) => {
  console.log(`navigation`);
// game: videoCategoryId : 20
// music : 10


  return (
    <ul className="navigation">
      <li>
        <Link to="/" className="navigation-item">
          <i className="fas fa-home"></i>
          <span>홈</span>
        </Link>
      </li>
      <li>
        <Link to="/popular/sport" className="navigation-item">
          <i class="far fa-futbol"></i>
          <span>스포츠</span>
        </Link>
      </li>
      <li>
        <Link to="/popular/education" className="navigation-item">
          <i class="fas fa-book-open"></i>
          <span>교육</span>
        </Link>
      </li>
      <li>
        <Link to="/popular/news" className="navigation-item">
          <i class="far fa-newspaper"></i>
          <span>뉴스</span>
        </Link>
      </li>
      <li>
        <Link to="/popular/comedy" className="navigation-item">
          <i class="fas fa-theater-masks"></i>
          <span>코미디</span>
        </Link>
      </li>
    </ul>
  );
});
export default Navigation;
