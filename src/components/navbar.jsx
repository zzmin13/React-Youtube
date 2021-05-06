import React, { memo } from "react";
import { Link } from "react-router-dom";

const Navbar = memo((props) => {
  console.log(`navbar`);
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fab fa-youtube"></i>
      </Link>
      <span>Youtube</span>
      <form>
        <input type="text" placeholder="검색"></input>
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
});

export default Navbar;
