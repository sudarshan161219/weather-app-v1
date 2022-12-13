import React from 'react'
import Card from './Card'
import CardTwo from './CardTwo';

 

const InfoDS = ({ Api, click, input}) => {


      return (
  
 <article className='cards-section'>
  <Card 
  {...Api.location} 
  {...Api.current} 
  {...Api.current.condition}
  click={click} 
  input={input}
  />

{Api.forecast.forecastday.map((item, index) =>{
  return(
      <CardTwo {...item} key={index} />
  )
})}


</article> 
      );
    };
    
 export default  InfoDS;