import React from 'react'
import cloudy from './images/cloudy.svg'
import haze from './images/haze.svg'
import mist from './images/mist.svg'
import Sunny from './images/clear-day.svg'
import  PartlyClear from './images/overcast.svg'
import  drizzly from './images/drizzle.svg'
import Rain from './images/rain.svg'
import sleet from './images/sleet.svg'
import stroms from './images/thunderstorms.svg'
import Patchyrain from './images/partly-cloudy-day-rain.svg'

const CardTwo = ({date, astro, day}) => {

  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const d = new Date(date);
let today = weekday[d.getDay()];

const text = day.condition.text

let imageURL = ""

console.log(text)
switch (text) {
   case 'Mostly Cloudy':
   imageURL = cloudy
   break;

    case 'Cloudy':
    imageURL = cloudy
    break;  

    case 'Partly Cloudy' && 'Partly cloudy':
    imageURL = cloudy
   
    break; 

    case 'Haze':
    imageURL = haze
    break;

    case 'Mist':
      imageURL = mist
      break;

    case 'Clear':
      imageURL = Sunny
      break;

      case 'Mostly Clear':
      imageURL = PartlyClear
      break;

      case 'Sunny':
        imageURL = Sunny
        break;

        case 'Mostly Sunny'  && 'Overcast':
          imageURL = PartlyClear
          break;
    
          case 'Showers' && 'Light rain shower':
          imageURL = drizzly
          break;

          case  'Moderate rain':
          imageURL = drizzly
          break;

          case 'Rain':
            imageURL = Rain
            break;

            case 'Sleet' && 'Light sleet':
              imageURL = sleet
              break;
 case 'Patchy rain possible':
  imageURL = Patchyrain
  break;

              case 'Thunderstorms':
                imageURL = stroms
                break;
  default:
    break;
}

  return (
    
    <div className='foreCast-card' >
      <div className='foreCast-card-heading__img'  >       
        <h3>{today}, {date}</h3>  
      <img src={imageURL}  alt={today}/>
      </div>
<div>
<p>day</p>
  <ul  className='foreCast-card-list' >
    <li>condition: {text}</li>
    <li>avgtemp: {day.avgtemp_c}°C / {day.avgtemp_f}°F</li>
    <li>maxtemp: {day.maxtemp_c}°C / {day.maxtemp_f}°F</li>
    <li>mintemp: {day.mintemp_c}°C / {day.mintemp_f}°F</li>
  </ul>
</div>

{/* <div>
  <p>astro</p>
  <ul  className='foreCast-card-list' >
    <li>sunrise: {astro.sunrise}</li>
    <li>sunset: {astro.sunset}</li>
    <li>moon illumination: {astro.moon_illumination}</li>
    <li>moon phase: {astro.moon_phase}</li>
    <li>moonrise: {astro.moonrise}</li>
    <li>moonset: {astro.moonset}</li>
  </ul>
</div> */}

    </div>


  )
}

export default CardTwo