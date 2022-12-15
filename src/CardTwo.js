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
import snow from './images/snow.svg'



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
      // #748DA6
    imageURL = cloudy
    break;  

    case 'Partly Cloudy' && 'Partly cloudy':
      // #B2C8DF
    imageURL = cloudy
   
    break; 

    case 'Haze':
      // #93B5C6
    imageURL = haze
    break;

    case 'Mist':
      // #D7EAEA
      imageURL = mist
      break;

    case 'Clear':
      // #A0E4F1
      imageURL = Sunny
      break;

      case 'Mostly Clear':
        // #A6FFF2
      imageURL = PartlyClear
      break;

      case 'Sunny':

        // #FAEAB1
        imageURL = Sunny
        break;

        case 'Mostly Sunny'  && 'Overcast':
          // #E8F3D6
          imageURL = PartlyClear
          break;
    
          case 'Showers' && 'Light rain shower':
            // #D2E4F1
          imageURL = drizzly
          break;

          case  'Moderate rain':
            // #8FACC0
          imageURL = drizzly
          break;

          case 'Rain' &&  'Heavy rain':
            // #818D97
            imageURL = Rain
            break;

            case  'Moderate or heavy snow showers' :
              imageURL = snow
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
    
    <><div className='foreCast-card'>
      <div className='foreCast-card-heading__img'>
        <h3>{today}, {date}</h3>
        <img src={imageURL} alt={today} />
        <p>{day.avgtemp_c} °C</p>
      </div>
    </div>
  
    </>
  )
}

export default CardTwo