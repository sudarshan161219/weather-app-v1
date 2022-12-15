import React from 'react'
import gif from './images/weathercock.gif'
import {BsGithub} from 'react-icons/bs'




const Header = () => {

 return ( 
 <nav className="nav">
<h1 className='nav-heading' >Weather </h1>
<img className='nav-icon' src={gif} alt='gif'></img>
<a href="https://github.com/sudarshan161219" > < BsGithub className='github-icon' /></a> 
 </nav>
      );
    };
    
 export default  Header;