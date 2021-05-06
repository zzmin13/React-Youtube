import React, { memo } from "react";
import { Link } from "react-router-dom";

const Navigation = memo(() => {
  console.log(`navigation`);
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
});
export default Navigation;
