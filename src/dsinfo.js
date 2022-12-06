import React from 'react'
import Card from './Card'

 

const InfoDS = ({ Api, click, input}) => {


//  const {city, country, lat, long, region, timezone_id, woeid} = Api.location


      return (
  
 <article className="cards-section">
  <Card {...Api.location} {...Api.current_observation.condition} click={click} input={input}/>
</article> 



      );
    };
    
 export default  InfoDS;