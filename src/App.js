import React, { useRef, useEffect, useState } from 'react'
import './App.css';
import Header from './header';
import Search from './search'
import InfoDS from './dsinfo'
import Intro from './intro';



function App() {
const [api, setApi] = useState({
location:{

}, 
current_observation:{
astronomy:'',
atmosphere:'',
condition:'',
wind:'',
 }, 
forecasts:[]
})


  const [input, setInput] = useState('')
  const [click, setClick] = useState(false)
  const inputRef = useRef()

  const query = input
  
  useEffect (() =>{
  const fetchInfo = async () => { 

    try{
  
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ccd9373daemsh7061f859180eaa5p146e05jsn84328b527c57',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
      };
      
if(click){
 const response = await fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${query}&format=json&u=c`, options)
const info = await response.json()
 setApi(info)
 setClick(false)
 }

  } catch(error){
console.log(error)
  }
  

  }
 
    fetchInfo()
},[click, query])


  return (
    <div className="App">
      <Header/>
      <Search
      search={setInput}
      inputR={inputRef}
      input={input}
      setClickk={setClick}
      />
    { click  ?  <Intro /> : <InfoDS Api={api}/> }

    </div>
  );
}

export default App;
