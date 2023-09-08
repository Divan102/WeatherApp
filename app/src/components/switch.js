// App.js Requires ... import Switch from './components/switch';
import React from "react";
import "./switch.css";

const Switch = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" />
    </label>
  );
};

export default Switch;
