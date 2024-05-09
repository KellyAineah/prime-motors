import React, { useEffect, useState } from 'react';
import './Search.css';


function SearchBar({darkMode}) {
 
  // const [cars, setCars] = useState([]);
 

  // useEffect(()=> {
  //   fetch ('http://localhost:4000/cars')
  //   .then(res => res.json())
  //   .then(data => setCars(data.cars))
  // },[])

  
  return (
    <div>
      <div className={`templateContainer ${darkMode ? 'dark-mode' : ''}`}>
       
        <div className='searchInput_Container' style={{ display: 'flex', alignItems: 'center' }}>
          <input
            id='searchInput'
            type='text'
            placeholder='Search here...'
            style={{ flex: '1' }} 
          />
          <button type="submit" style={{ marginLeft: '10px' }}>Search</button>  
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

