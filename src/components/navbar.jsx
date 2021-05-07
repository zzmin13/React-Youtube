import React, { memo, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = memo((props) => {
  console.log(`navbar`);
  const inputRef = useRef();
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <i
          style={{ color: "red" }}
          className="fab fa-youtube navbar-logo-icon"
        ></i>
        <span className="navbar-logo-title">YouTube</span>
      </Link>
      <form action={`/search`} method="get" className="navbar-form">
        <input
          type="text"
          placeholder="검색"
          ref={inputRef}
          name="word"
          className="navbar-form-input"
        ></input>
        <button type="submit" className="navbar-form-button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
});

export default Navbar;
