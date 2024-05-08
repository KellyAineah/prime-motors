
import React from 'react'
import Carousel from './Carousel'
import"./Paragraph.css"
import SearchBar from './SearchBar'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div>
      <p className='paragraph'>
        <span>Drive Your Dreams With PrimeMotors</span>

        </p>
        <SearchBar />
      <Carousel />
      </div>
      <Footer />
    </div>
  )
}

export default Home
