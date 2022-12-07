import React from 'react'
import {WiCelsius} from 'react-icons/wi'
import pic from './images/ezgif.com-gif-maker.gif'
import cloudy from './images/cloudy.gif'

const InfoDS = ({ city, country, lat, long, region, timezone_id, woeid, code, text, temperature}) => {

// const [color, setColor] = useState({
//     Cloudy: '#5F6F94',
//   PartlyCloudy: '#9CB4CC',
//   Clear: '#B9FFFC',
//   Haze: '#D2DAFF',
//   Showers: '#5584AC',
// })
const color =({
 Cloudy: cloudy,
PartlyCloudy: pic,
Clear: '#B9FFFC',
Haze: '#D2DAFF',
Showers: '#5584AC',
})

let imageURL = ""



  if(text === 'Mostly Cloudy' && 'Partly Cloudy'){
    imageURL = color.Cloudy
}else if(text === 'Cloudy'){
  imageURL = color.Cloudy
}

// else{
//   imageURL = color.PartlyCloudy
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