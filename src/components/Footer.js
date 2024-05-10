import React from 'react';
import './Footer.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHippo, faPhone, faEnvelope, faCar} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-content'>
            <div className='footer-row'>
                
                <div className='footer-col'>
                    <h4>About Prime Motors <FontAwesomeIcon icon={faCar} /></h4>
                
                    <FontAwesomeIcon icon={faHippo} /> <FontAwesomeIcon icon={faHippo} /> <FontAwesomeIcon icon={faHippo} bounce/> <FontAwesomeIcon icon={faHippo} /> <FontAwesomeIcon icon={faHippo} />
                   <p> Founded in 2024, Prime Motors is dedicated to delivering exceptional cars with top-notch service. Explore our trusted vehicle solutions in Westlands, Nairobi. </p>


                </div>
                
                <div className='footer-col'>
                    <h4>Quick Links</h4>
                    <ul className='list-unstyled'>
                        <li><a href="/cars">Cars</a></li>
                        <li><a href="/sellyourcar">SellYourCar</a></li>
                        <li><a href="/contacts">Contact Us</a></li>
                    </ul>
                </div>
               
                <div className='footer-col'>
                    <h4>Support</h4>
                    <ul className='list-unstyled'>
                        <li> <FontAwesomeIcon icon={faPhone} />   (254) 755-222-333</li>
                        <li><FontAwesomeIcon icon={faEnvelope} />  <a href="mailto:support@primemotors.com">contact@primemotors.com</a></li>
                        <li>Hunters Street,    Westlands</li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Prime Motors. All rights reserved.</p>
        <FontAwesomeIcon icon={faEnvelope} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} /> <FontAwesomeIcon icon={faInstagram} />
      </div>
        </div>
    </footer>
  );
}

export default Footer;
