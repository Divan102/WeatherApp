//https://openweathermap.org/weather-conditions ---for weather types
// App.js requires --- import WeatherIcon from './components/weather_icon';
// Condition passed --- <WeatherIcon condition='Cloudy'/>  
import React from 'react';
import './weather_icon.css';

const weatherIcon = props => {
    let icon = "";
    switch(props.condition){
        case 'Thunderstorm':
            icon ='/weather_icons/thunderstorm.png';
            break;
        case 'Drizzle':
            icon ='/weather_icons/overcast.png';
            break;
        case 'Rain':
            icon ='/weather_icons/rainy.png';
            break;
        case 'Snow':
            icon ='/weather_icons/snowy.png';
            break;
        case 'Clear':
            icon ='/weather_icons/sunshine.png';
            break;
        case 'Clouds':
            icon ='/weather_icons/cloudy.png';
            break;
        default: // Atmosphere has multiple dofferent conditions
            icon ='/weather_icons/foggy.png';
            break;                    
    }

    //Switch works Icon is jus not assigned
    return (
        <div className="container">
            <img className="icon weatherIcon" src={icon} alt="Missing Weather Icon"/>
            <div className="weathercondition">
                {props.condition}
            </div>
        </div>
    
    )
};

export default weatherIcon;