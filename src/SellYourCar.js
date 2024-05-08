import React from 'react';
import './sellYourCar.css'

export default function SellYourCar() {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <div className="sell-your-car-container">
      <h3>Sell Your Car</h3>
      <form className="sell-your-car-form" onSubmit={handleSubmit}>
        <label className="sell-your-car-label" htmlFor="registration">
          Registration Number <input className="sell-your-car-input" id="registration" name="registration"/>
        </label>
        <label className="sell-your-car-label" htmlFor="make">
          Make <input className="sell-your-car-input" id="make" name="make"/>
        </label>
        <label className="sell-your-car-label" htmlFor="color">
          Color <input className="sell-your-car-input" id="color" name="color"/>
        </label>
        <button className="sell-your-car-button" type="submit">Submit</button>
      </form>
    </div>
  );
}
