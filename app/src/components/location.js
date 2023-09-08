//app.js ---- import Location from './components/location';
// <Location city='Pretoria'/>

import React from "react";
import "./location.css";

const Location = (props) => {
  let city = props.city.toUpperCase();

  let dateCurrent = new Date();
  let date =
    dateCurrent.toLocaleDateString("en-US", { day: "numeric" }) +
    " " +
    dateCurrent.toLocaleDateString("en-US", { month: "long" }) +
    " " +
    dateCurrent.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <div className="LocationData">
      <h1 id="City">{city}</h1>
      <h2 id="currentDate">{date}</h2>
    </div>
  );
};

export default Location;
