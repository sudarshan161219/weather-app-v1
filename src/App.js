import React, { useRef, useEffect, useState } from 'react'
import './App.css';
import Header from './header';
import Search from './search'
import InfoDS from './dsinfo'
import Loading from './Loading';



function App() {
const [api, setApi] = useState({
  location: {

  },
   current: {
air_quality:{},
condition:{}
   },
   forecast:{

   }
})


  const [input, setInput] = useState('')
  const [click, setClick] = useState(false)
  const inputRef = useRef()

  const query = input
  
  useEffect (() =>{
  const fetchInfo = async () => { 

    try{
  
if(click){
 const response = await  fetch( `https://api.weatherapi.com/v1/forecast.json?key=d6f8c23cf7664a70b8b154605221012&q=${query}&days=5&aqi=yes&alerts=yes`)

const info = await response.json()
setApi(info)
 setClick(false)
 }

  } catch(error){
  console.log(error)
  }

  }
    fetchInfo()
},[ click, input, query])



  return (
    <div className="App">
      <Header/>
      <Search
      search={setInput}
      inputR={inputRef}
      input={input}
      setClickk={setClick}
      />

{click ?  <Loading /> :  <InfoDS Api={api}/> }
    </div>
  );
}

export default App;
