import React from 'react'

const HighLight = ({pressure_in, pressure_mb, humidity, wind_kph, wind_mph ,vis_km, vis_miles}) => {
  return (
    <>
    <div className={pressure_in ? 'show-today-highLight-container' : 'today-highLight-container'}>
<h1>today's highlight</h1>
      <div className='today-highLight-flex-container'>   
  <div className='today-highLight'>
<p>wind status</p>
<p className='today-highLight-para'>{wind_kph}<span>kph</span></p>
    </div>
    
    <div className='today-highLight'>
    <p>humidity</p>
    <p className='today-highLight-para'>{humidity}<span>%</span></p>
    </div>
    </div>

<div className='today-highLight-flex-container'>
    <div className='today-highLight'>
    <p>visibility</p>
   <p className='today-highLight-para'>{vis_km}<span>km</span></p> 
    </div>

    <div className='today-highLight'>
    <p>Air pressure</p>
    <p className='today-highLight-para' >{pressure_mb}<span>mb</span></p>
    </div>
</div>
</div>
    </>
  )
}

export default HighLight