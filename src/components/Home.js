
import React from 'react'
import Carousel from './Carousel'
import"./Paragraph.css"
import RandomCarFacts from './SearchBar'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div>
      <p className='paragraph'>
        <span>Drive Your Dreams With PrimeMotors</span>

        </p>
        <RandomCarFacts/>
      <Carousel />
      </div>
      <Footer />
    </div>
  )
}

export default Home
