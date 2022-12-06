import React from 'react'
import { AiOutlineSearch} from 'react-icons/ai'


const Search = ({input, inputR, setClickk, search}) => {

const handleSubmit = (e) =>{
    e.preventDefault()
}

const fetch = () =>{
  setClickk(prevdata => !prevdata)
}


    return (
        <div className='main-div'>
         <form  onSubmit={handleSubmit} className='form webflow-style-input'> 
      <AiOutlineSearch  
      className={input !== '' ?'show-search-icon' : 'search-icon'}
      onClick={fetch}
      /> 
        <input 
        placeholder='Search for a country...'
        type='search' 
        className='input'
        value={input}
        ref={inputR}
        onChange={(e) => search( e.target.value)}
        >  
        </input>
      </form>
       </div>
    );
  };
  
  export default Search;