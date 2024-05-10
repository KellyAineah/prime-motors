
import React from 'react'
import Carousel from './Carousel'
import"./Paragraph.css"
import RandomCarFacts from './RandomCarFacts'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div>
      <p className='paragraph'>
        <span>Drive Your Dreams With PrimeMotors</span>

        </p>
        
      <Carousel />
      
      <RandomCarFacts />

      </div>
      <Footer />
    </div>
  )
}

export default Home
