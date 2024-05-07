import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHippo} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className='nav'>
      <a  className='title'><FontAwesomeIcon icon={faHippo} />PrimeMotors</a>
      <ul>
      <li className='active'><a href='/home'>Home</a></li>
            <li><a href='/cars'>Cars</a></li>
            <li><a href='/cart'>Cart</a></li>
            <li><a href='/sell your car'>Sell Your Car</a></li>
            <li><a href='/contact us'>Contact Us</a></li>
            <li><a href='/login'>Login</a></li>

        
      </ul>
    </nav>
  )
}

export default Navbar
