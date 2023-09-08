import React from "react";
import { Component } from "react";

const Search = () => {
  return (
    //Requires Form methode="POST"
    //'/searchlocaion' refers to server/routes/api/weatherApi.js
    <div>
      <form method="POST" action="/searchLocation">
        <input
          className="App-Search"
          type="text"
          placeholder="Zip Code"
          name="zip"
          pattern="[0-9]{4}"
          required
        />
        <div className="App-Button">
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
