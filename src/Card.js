import React from 'react'
import {WiCelsius} from 'react-icons/wi'
import pic from './images/philipp-pilz-AOhBMkQlzgM-unsplash.jpg'

 

const InfoDS = ({ city, country, lat, long, region, timezone_id, woeid, code, text, temperature}) => {

      return (
  
 <article className="cards">
    <div className={city ? 'show-card-container':'card-container'} >
    <div className='info-container'>
<h1 className='cards-heading'>{city}</h1>
<p className='cards-para'>{country}</p>
<p className='cards-para'>{region}</p>
<p className='cards-para'>{lat}</p>
<p className='cards-para'>{long}</p>
<p className='cards-para'>{timezone_id}</p>
<p className='cards-para'>{woeid}</p> 
<p>{temperature}<WiCelsius className={temperature ?  'show-Celsius-icon' : 'Celsius-icon'}/></p>

  </div>
    </div>



    </article> 



      );
    };
    
 export default  InfoDS;