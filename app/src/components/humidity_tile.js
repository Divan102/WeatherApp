// App.js requires --- import HumidTile from './components/humidity_tile';
// Condition passed --- <HumidTile humid='50%'/>
import React from "react";
import "./tiles.css";

const HumidTile = (props) => {
  let humid = props.humid;

  return (
    <div className="containerTiles">
      <img
        className="icon"
        src="/weather_icons/foggy.png"
        alt="Missing Weather Icon"
      />
      <div className="currentCondition">{humid} %</div>
      <label className="tileName">Humidity</label>
    </div>
  );
};

export default HumidTile;
