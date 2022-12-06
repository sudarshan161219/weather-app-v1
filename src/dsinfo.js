import React from 'react'
import {WiCelsius} from 'react-icons/wi'
import pic from './images/philipp-pilz-AOhBMkQlzgM-unsplash.jpg'
import Card from './Card'

 

const InfoDS = ({ Api, click, input}) => {


//  const {city, country, lat, long, region, timezone_id, woeid} = Api.location


      return (
  
 <article className="cards-section">
  <Card {...Api.location} click={click} input={input}/>
</article> 



      );
    };
    
 export default  InfoDS;