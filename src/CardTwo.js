import React from 'react'

const CardTwo = ({date, astro}) => {
  return (
    <div>
       <h3>date: {date}</h3> 
       <h3>sunrise: { astro.sunrise}</h3> 
       <h3>sunset: {astro.sunset}</h3> 
    </div>
  )
}

export default CardTwo