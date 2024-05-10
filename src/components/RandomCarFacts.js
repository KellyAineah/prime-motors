import React, { useState, useEffect } from 'react';
import './Cars.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons';

const RandomCarFacts = () => {
  const [randomFact, setRandomFact] = useState('');
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    // Fetching the facts data from the endpoint
    fetch("http://localhost:4000/randomFacts")
      .then(response => response.json())
      .then(data => setFacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const generateRandomFact = () => {
    // Generate a random index to select a random fact from the facts array
    const randomIndex = Math.floor(Math.random() * facts.length);
    setRandomFact(facts[randomIndex].fact);
  };

  return (
    <div className="random-facts-container">
      <button className="random-facts-button" onClick={generateRandomFact}> <FontAwesomeIcon icon={faCar} />  Random Car Facts  <FontAwesomeIcon icon={faCar} /></button>
      <p className={`random-facts-text ${randomFact ? 'random-facts-text-alternate' : ''}`}>{randomFact}</p>
    </div>
  );
};
export default RandomCarFacts;
