import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarSpecsModal from './CarSpecsModal';
import "./CarCards.css"
function CarCards({carDetails}) {
   const[showSpecsModal,setShowSpecsModal]=useState(false)

//Function to handle show specifications modal
function handleShowSpecs(){
  setShowSpecsModal(true)
}
//Function to handle to hide specifications modal
function handleHideSpecs(){
  setShowSpecsModal(false)
}
  return (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={carDetails.image} />
    <Card.Body>
      <Card.Title className='car-title'>{carDetails.name}</Card.Title>
      <Card.Text className="car-details">
        Model :{carDetails.model}   <br/>
        Description :{carDetails.description}   <br/>
        Price : Kshs.{carDetails.price}M
      </Card.Text>
      <Button variant="dark" onClick={handleShowSpecs}>More Details</Button>
    </Card.Body>
  </Card>

  <CarSpecsModal show={showSpecsModal} onHide={handleHideSpecs} specs={carDetails}/>

  </>
);
  
}

export default CarCards
