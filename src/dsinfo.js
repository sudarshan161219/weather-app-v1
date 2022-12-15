import React from 'react'
import Card from './Card'
import CardTwo from './CardTwo';
import HighLight from './HighLight';
// import {useSpring, animated,  useTransition} from '@react-spring/web';
 

const InfoDS = ({ Api, click, input}) => {


      return (

<article className='cards-section'>

            <Card
              {...Api.location}
              {...Api.current}
              {...Api.current.condition}
              click={click}
              input={input} />
<div  className='forecast-HighLight'>
  <div className='forecast-forecastday' >
            {Api.forecast.forecastday.map((item, index) => {
              return (
                <CardTwo {...item} key={index} />
              );
            })}
</div>
<HighLight
  {...Api.current}
/>

</div>
           </article>
      );
    };
    
 export default  InfoDS;