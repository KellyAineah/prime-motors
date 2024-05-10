import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [newsletter, setNewsletter] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      newsletter,
    };
    console.log(formData); 
  }

  return (
    <>
    <div className='mapper'>
      <div className='map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7411385237974!2d36.86381781009385!3d-1.331420835670563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11f7b43e2125%3A0xc54eed0fc2524201!2sLibra%20House!5e0!3m2!1sen!2ske!4v1715239715635!5m2!1sen!2ske"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Unique Title" ></iframe>
      </div>
      <div className='contact details'>
        <h2>Contact Us</h2>
        <div className="contact-info">
          <h3>Prime Motors Westlands</h3>
          <p><strong>Email:</strong> contact@primemotors.com</p>
          <p><strong>Phone:</strong> 0113859475</p>
          <p><strong>Address:</strong> Tulip House</p>
        </div>
        <div className="contact-info">
          <h3>Prime Motors Mombasa Road</h3>
          <p><strong>Email:</strong> contact@primemotors.com</p>
          <p><strong>Phone:</strong> 0113857965</p>
          <p><strong>Address:</strong> Libra House</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="newsletter">
            Get the newsletter sent to you
            <input
              type="checkbox"
              id="newsletter"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
            />
          </label>
          <button type="submit" className="submit-button">Submit</button>
          {/* <button type="submit" className="submit-button">Submit</button> */}
        </form>
      </div>
      </div>
    </>
  );
}
