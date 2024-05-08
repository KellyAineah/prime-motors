import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './sellYourCar.css';

function SellYourCar() {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [make, setMake] = useState('');
  // const [avatar, setAvatar] = useState("");
  const [accidentHistory, setAccidentHistory] = useState('pro');
  const [notifications, setNotifications] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      registrationNumber,
      make,
      accidentHistory,
      notifications,
    };
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
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

      {/* <label htmlFor="avatar">Avatar Image</label>
      <input
        type="text"
        id="avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <img
        src={avatar}
        alt="Avatar preview"
      /> */}

      <label htmlFor="type">Has Accident History</label>
      <select
        id="type"
        value={accidentHistory}
        onChange={(e) => setAccidentHistory(e.target.value)}
      >
        <option value="pro">Yes</option>
        <option value="normal">No</option>
      </select>

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
