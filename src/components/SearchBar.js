import React from 'react';
import './Search.css';

function SearchBar() {
  return (
    <div>
      <div className='templateContainer'>
       
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

