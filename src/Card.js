import React from 'react'
import {WiCelsius} from 'react-icons/wi'
import Sunny from './images/sun.gif'
import cloudy from './images/clouds.gif'
import haze from './images/foggy (1).gif'
import PartlyClear from './images/cloudy.gif'
import drizzly from './images/drizzle.gif'
import rain from './images/rain.gif'
import sleet from './images/hailstone.gif'
import stroms from './images/storm.gif'
import loc from './images/location.gif'
import mist from './images/mist.svg'

const InfoDS = ({ name,text, temp_c}) => {

let imageURL = ""

switch (text) {
   case 'Mostly Cloudy':
   imageURL = cloudy
   break;

    case 'Cloudy':
    imageURL = cloudy
    break;  

    case 'Partly Cloudy':
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

        case 'Mostly Sunny':
          imageURL = PartlyClear
          break;
    
          case 'Showers':
          imageURL = drizzly
          break;

          case 'Rain':
            imageURL = rain
            break;

            case 'Sleet':
              imageURL = sleet
              break;
              case 'Thunderstorms':
                imageURL = stroms
                break;
  default:
    break;
}


      return (   
  
 <article className={name ? "show-cards" : "cards"}>
    <div className='first-card-container'>
      <div className='img-container'>
        <img src={imageURL } alt='img' />
      </div>
<div className='info-container'>
{/* <h2 className='cards-heading'></h2> */}
<ul className='cards-info'>
  <li className='temp' >{temp_c}<WiCelsius className={temp_c ?  'show-Celsius-icon' : 'Celsius-icon'}/></li>
  <li className='weth-condition'>{text}</li>
</ul>

<ul className='cards-info-2'>
  {/* <li>{text}</li> */}
  <li className='location-li'> 
  <img className='li-img' src={loc} alt='location'/> 
  <p>{name}</p>
  </li>
</ul>
  </div>
 </div>

   <div className='second-card-container'> 

   </div> 
  </article> 



      );
    };
    
 export default  InfoDS;