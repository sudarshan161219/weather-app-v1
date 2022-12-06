import React from 'react'
import {WiCelsius} from 'react-icons/wi'
import pic from './images/philipp-pilz-AOhBMkQlzgM-unsplash.jpg'

 

const InfoDS = ({ city, country, lat, long, region, timezone_id, woeid}) => {


//  const {} = Api.location


      return (
  
 <article className="cards">
    <div className='card-container' >
    <div className='img-container'>
    <img src={pic}  alt="hello"/>
  </div>   
    <div className='info-container'>
<h1 className='cards-heading'>{city}</h1>
<p className='cards-para'>{country}</p>
<p className='cards-para'>{region}</p>
<p className='cards-para'>{lat}</p>
<p className='cards-para'>{long}</p>
<p className='cards-para'>{timezone_id}</p>
<p className='cards-para'>{woeid}</p> 
  </div>
    </div>



    </article> 



      );
    };
    
 export default  InfoDS;