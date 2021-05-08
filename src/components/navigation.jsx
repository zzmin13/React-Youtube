import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = memo((props) => {
  console.log(`navigation`);
  // console.log(document.location);
  // const initialPage = document.location.href;
  // const [current, setCurrent] = useState(initialPage);

  return (
    <ul className="navigation">
      <li>
        <Link to="/" className="navigation-item">
          <i className="fas fa-home"></i>
          <span>홈</span>
        </Link>
      </li>
      <li>
        <Link to="/popular" className="navigation-item">
          <i className="fas fa-star"></i>
          <span>인기</span>
        </Link>
      </li>
    </ul>
  );
});
export default Navigation;
