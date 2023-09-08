// home btn

import React from "react";
import { Link } from "react-router-dom";
import "./homeBtn.css";

const HomeBtn = () => {
  return (
    <div>
      <Link to="/">
        <button className="homeBtn">Search Again</button>
      </Link>
    </div>
  );
};

export default HomeBtn;
