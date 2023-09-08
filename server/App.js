//Config File
require("dotenv").config();
//node-fetch has an error with the latest version. So downgraded to v2
const fetch = require("node-fetch"); //Handles fetching information form api

//Port can't be the same as client/app
const PORT = process.env.PORT;
const KEY = process.env.KEY;

//Build express server
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //Recieves json file

//require('./routes/weatherApi.js');

//Check to see if express server is running
app.get("/", function (req, res) {
  res.send("API is working");
});

let zip = "";
const country = "ZA";

//POST Route front end can use to zend ZIP code to backend
app.post("/searchLocation", (req, res) => {
  zip = req.body.zip;

  //zip codes usually between 00000 and 99999 some in form of 0000 9999
  //We are limiting out zip codes to south african zip codes so length =4
  if (!zip || zip.length != 4) {
    res.redirect("/error");
  } else {
    res.redirect("/current-weather"); //Specified path form brief
  }
});

// Get Route that is called by the React Frontend "ie. CurrentWeather.js" ... React Frontend will require 'React Router'
app.get("/searchLocationWeather", (req, res) => {
  //Creates string containing Country, Zip and required API KEY
  const stringBuilder_url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${KEY}`;

  fetch(stringBuilder_url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data }); //data name for recieved information json
    })
    .catch((error) => {
      res.redirect("/error");
    });
});

//runs server
app.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  }
  console.log(`Server is running on port: ${PORT}`);
});
