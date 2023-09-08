// App.js requires --- import WindTile from './components/wind_tile';
// Condition passed --- <WindTile wind='10m/s'/>
import React from "react";
import "./tiles.css";

const WindTile = (props) => {
  let wind = props.wind;

  return (
    <div className="containerTiles">
      <img
        className="icon"
        src="/weather_icons/windy.png"
        alt="Missing Weather Icon"
      />
      <div className="currentCondition">{wind} m/s</div>
      <label className="tileName">Wind</label>
    </div>
  );
};

export default WindTile;
