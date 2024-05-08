
import React from 'react'
import Carousel from './Carousel'
import"./Paragraph.css"
import SearchBar from './SearchBar'

function Home() {
  return (
    <div>
      <p className='paragraph'>
        <span>Drive Your Dreams With PrimeMotors</span>

        </p>
        <SearchBar />
      <Carousel />
      
    </div>
  )
}

export default Home
