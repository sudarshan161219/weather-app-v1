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

const InfoDS = ({ city, country, lat, long, region, timezone_id, woeid, code, text, temperature}) => {

// const [color, setColor] = useState({
//     Cloudy: '#5F6F94',
//   PartlyCloudy: '#9CB4CC',
//   Clear: '#B9FFFC',
//   Haze: '#D2DAFF',
//   Showers: '#5584AC',
// })
// const color =({
//  Cloudy: cloudy,
// PartlyCloudy: PartlyCloudy,
// Clear: Sunny,
// Haze: haze,
// Showers: '#5584AC',
// })

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

// if(text === 'Mostly Cloudy' || 'Cloudy' ){
//     imageURL = cloudy
// }
// if(text === 'Partly Cloudy'){
//   imageURL = PartlyCloudy
// }
// if(text === 'Haze'){
//   imageURL = haze
// }
// if(text === 'Clear' || 'Sunny'){
//   imageURL = Sunny
// }

      return (   
  
 <article className="cards">
    <div className={city ? 'show-card-container':'card-container'} >
      <div className='img-container'>
<img src={imageURL } alt='img' />
      </div>
  <div className='info-container'>
<h1 className='cards-heading'>{city}</h1>
<p className='cards-para'>country: {country}</p>
<p className='cards-para'>region: {region}</p>
<p className='cards-para'>lat: {lat}</p>
<p className='cards-para'>long: {long}</p>
<p className='cards-para'>timezone: {timezone_id}</p>
<p>{temperature}<WiCelsius className={temperature ?  'show-Celsius-icon' : 'Celsius-icon'}/></p>
<p>{text}</p>
  </div>
    </div>
  </article> 



      );
    };
    
 export default  InfoDS;