import React, { memo, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import "./navbar.css";

const Navbar = memo(({ history }) => {
  console.log(`navbar`);
  const inputRef = useRef();
  const handleOnKeyPress = (event) => {
    if (event.key === "Enter") {
      const params = inputRef.current.value;
      history.push(`/search/${params}`);
      inputRef.current.value = "";
    }
  };
  const handleOnClick = () => {
    const params = inputRef.current.value;
    history.push(`/search/${params}`);
    inputRef.current.value = "";
  };
  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <i
          style={{ color: "red" }}
          className="fab fa-youtube navbar-logo-icon"
        ></i>
        <span className="navbar-logo-title">YouTube</span>
      </Link>
      <div className="navbar-form">
        <input
          type="search"
          placeholder="검색"
          ref={inputRef}
          name="word"
          className="navbar-form-input"
          onKeyPress={handleOnKeyPress}
        ></input>
        <button
          type="submit"
          className="navbar-form-button"
          onClick={handleOnClick}
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
});

export default withRouter(Navbar);
