const fetch = require('node-fetch');

module.exports = (app) => {

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
    
  };
  