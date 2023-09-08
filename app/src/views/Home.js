import React from "react";
import "./HomePage.css";
import Search from "../components/search.js";

function HomePage() {
  return (
    <body>
      <div className="home-page">
        <h4>
          <header>Weather Forecast</header>
        </h4>
        <p className="App-Paragraph">Enter your Zip Code to get started</p>
        <Search />
        <p className="bottomText">South African ZIP codes only.</p>
      </div>
    </body>
  );
}

export default HomePage;
