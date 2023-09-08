// App.js requires --- import FutureMinMax from './components/futureMinMax';
// Condition passed --- <FutureMinMax min='10' max='20' date='3/5/2023' condition='Rain'/>

import React from "react";
import './futureMinMax.css';

const FutureMinMax = props => {
    let min = props.min;
    let max = props.max;
    let date = props.date;

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

    //Note shure how to make a bar between hot and cold
    return (
        <div id="container-futureMinMax">          
            <label>{date}</label>
            <p id="min">{min}&deg;</p>
            <p id="max">{max}&deg;</p>
            <img className="icon weatherMinMaxIcon" src={icon} alt="Missing Weather Icon"/>
        </div>
    );
 };
 
 export default FutureMinMax;