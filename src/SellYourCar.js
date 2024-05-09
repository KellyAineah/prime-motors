import React, { useState } from 'react';
import './sellYourCar.css'

function SellYourCar() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [make, setMake] = useState('');
  const [accidentHistory, setAccidentHistory] = useState('pro');
  const [notifications, setNotifications] = useState(true);
  const [file, setFile]= useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      registrationNumber,
      make,
      accidentHistory,
      notifications,
    };

    fetch("http://localhost:4000/sellYourCar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
      // Reset form fields after successful submission
      setRegistrationNumber("");
      setMake("");
      setAccidentHistory("pro");
      setNotifications(true);
      setFile("");
    })
    .catch(error => {
      console.error("Error:", error);
    });
  };

  function handleImage(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <form className ="sell-your-car-form" onSubmit={handleSubmit}>
      <h1>Sell Your Car</h1>
      <label htmlFor="registrationNumber">Registration Number</label>
      <input
        type="text"
        id="registrationNumber"
        value={registrationNumber}
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />

      <label htmlFor="make">Make</label>
      <input
        type="text"
        id="make"
        value={make}
        onChange={(e) => setMake(e.target.value)}
      />

      <label htmlFor="type">Has Accident History</label>
      <select
        id="type"
        value={accidentHistory}
        onChange={(e) => setAccidentHistory(e.target.value)}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
      
      <div className='car-image'>
        <p>Upload a picture of your car</p>
        <input type='file' onChange={handleImage}/>
        {file && <img src={file} alt="Car" />}
      </div>

      <label>
        Be notified on new offers
        <input
          type="checkbox"
          id="notifications"
          checked={notifications}
          onChange={(e) => setNotifications(e.target.checked)}
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default SellYourCar;
