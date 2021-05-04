import React from "react";
import "../css/navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <i className="fab fa-youtube"></i>
      <span>Youtube</span>
      <form>
        <input type="text" placeholder="검색"></input>
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Navbar;
