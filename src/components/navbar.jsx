import React, { memo, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = memo((props) => {
  console.log(`navbar`);
  const inputRef = useRef();
  return (
    <div className="navbar">
      <Link to="/">
        <i style={{ color: "red" }} className="fab fa-youtube navbar-logo"></i>
      </Link>
      <span className="navbar-title">YouTube</span>
      <form action={`/search`} method="get" className="navbar-form">
        <input
          type="text"
          placeholder="검색"
          ref={inputRef}
          name="word"
        ></input>
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
});

export default Navbar;
