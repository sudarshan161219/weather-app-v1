import React from 'react'
import gif from './images/ezgif.com-gif-maker.gif'


const Header = () => {

 return ( 
 <nav className="nav">
<h1 className='nav-heading' >Weather </h1>
{/* <WiCloudyGusts className='nav-icon' /> */}
<img className='nav-icon' src={gif} alt='gif'></img>

 </nav>
      );
    };
    
 export default  Header;