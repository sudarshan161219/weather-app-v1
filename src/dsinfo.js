import React from 'react'
import {WiCelsius} from 'react-icons/wi'

const InfoDS = ({ Api}) => {


 const {city, country, lat, long, region, timezone_id, woeid} = Api.location


      return (
    <article className="cards">
<h1 className='cards-heading'>{city}</h1>
<p className='cards-heading'>{country}</p>
<p className='cards-heading'>{region}</p>
<p className='cards-heading'>{lat}</p>
<p className='cards-heading'>{long}</p>
<p className='cards-heading'>{timezone_id}</p>
<p className='cards-heading'>{woeid}</p>
<h2 className='cards-heading-two'>{Api.current_observation.condition.temperature}
<WiCelsius className={Api.current_observation.condition.temperature ?  'show-Celsius-icon' : 'Celsius-icon'}/>
</h2>
{/* {Api.forecasts.map((item, id)=>{
return <h2 key={id} >{item.day}</h2> 
})} */}
    </article>
      );
    };
    
 export default  InfoDS;