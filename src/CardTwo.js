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
const CardTwo = ({date, astro, day}) => {

  const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const d = new Date(date);
let today = weekday[d.getDay()];

const text = day.condition.text

let imageURL = ""


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


              case 'Thunderstorms':
                imageURL = stroms
                break;
  default:
    break;
}

  return (
    <div className='foreCast-card' >
       <h3>{today}, {date}</h3>  
      <img src={imageURL}  alt={today}/>
       <h3>sunrise: { astro.sunrise}</h3> 
       <h3>sunset: {astro.sunset}</h3> 
    </div>
  )
}

export default CardTwo