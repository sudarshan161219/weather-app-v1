import React, { useRef, useEffect, useState } from 'react'
import './App.css';
import Header from './header';
import Search from './search'
import InfoDS from './dsinfo'
import Loading from './Loading';



function App() {
const [api, setApi] = useState({
location:'', 
current_observation:{
astronomy:'',
atmosphere:'',
condition:'',
wind:'',
 }, 
forecasts:[]
})

  const [loading, setLoading] = useState(true)
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
 
 setLoading(false)

  } catch(error){
console.log(error)
setLoading(false)

  }

  }
    fetchInfo()
},[click, query, api])


// if(input === ''){
//   return(
//     <main>
//      <Intro/>
//     </main>
//   )
// }


  return (
    <div className="App">
      <Header/>
      <Search
      search={setInput}
      inputR={inputRef}
      input={input}
      setClickk={setClick}
      />
    {/* { click ?  'h': <InfoDS Api={api}/>  } */}
{input === '' ? 'heloo' : (click ?  <Loading /> : <InfoDS Api={api}/>) }
    </div>
  );
}

export default App;
