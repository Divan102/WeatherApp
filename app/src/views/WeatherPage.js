import React, { Component } from "react";
import "./WeatherPage.css";
import "../components/switch.css";
import HumidTile from "../components/humidity_tile";
import RainTile from "../components/rain_tile";
import WindTile from "../components/wind_tile";
import WeatherIcon from "../components/weather_icon";
import Location from "../components/location";
import Temperature from "../components/temperature";
import HomeBtn from "../components/homeBtn";

class WeatherPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityName: "",
      weatherCondition: "",
      currentTemperature: "",
      rainExpected: "",
      windExpected: "",
      humidityExpected: "",
      isFahrenheit: false, // Initially set to Celsius
    };
  }

  componentDidMount() {
    fetch("/searchLocationWeather")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data && data.data.cod === "404") {
          this.setState({
            loading: false,
          });
        } else if (data && data.data) {
          this.setState({
            loading: false,
            cityName: data.data.name,
            weatherCondition: data.data.weather[0].main,
            currentTemperature: data.data.main.temp,
            rainExpected: data.data.rain,
            windExpected: data.data.wind.speed,
            humidityExpected: data.data.main.humidity,
          });
        } else {
          this.setState({
            loading: false,
          });
          console.log("Data not received or is null");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  convertKelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2); // Convert Kelvin to Celsius and round to 2 decimal places
  }

  convertCelsiusToFahrenheit(celsius) {
    return (celsius * 1.8 + 32).toFixed(2); // Convert Celsius to Fahrenheit and round to 2 decimal places
  }

  handleSwitchToggle = () => {
    this.setState((prevState) => ({
      isFahrenheit: !prevState.isFahrenheit,
    }));
  };

  render() {
    const {
      isFahrenheit,
      currentTemperature,
      loading,
      cityName,
      weatherCondition,
      rainExpected,
      windExpected,
      humidityExpected,
    } = this.state;
    const celsiusTemperature = this.convertKelvinToCelsius(currentTemperature);
    const fahrenheitTemperature =
      this.convertCelsiusToFahrenheit(celsiusTemperature);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!cityName) {
      return <div>City not found.</div>;
    }

    return (
      <div>
        <div>
          <HomeBtn />
        </div>
        <div className="WeatherContainer">
          <Location city={cityName} />
          <div className="WeatherIcon">
            <WeatherIcon condition={weatherCondition} />
          </div>
          <div className="Temperature">
            <Temperature
              temperature={
                isFahrenheit ? fahrenheitTemperature : celsiusTemperature
              }
            />
            <div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isFahrenheit}
                  onChange={this.handleSwitchToggle}
                />
                <span className="slider" />
              </label>
            </div>
          </div>
          <div className="WeatherCondition">
            <div>
              <RainTile rain={rainExpected} />
            </div>
            <div>
              <HumidTile humid={humidityExpected} />
            </div>
            <div>
              <WindTile wind={windExpected} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherPage;
