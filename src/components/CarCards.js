import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function CarCards({carDetails}) {
   
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={carDetails.image} />
    <Card.Body>
      <Card.Title>{carDetails.name}</Card.Title>
      <Card.Text>
        Model :{carDetails.model}
        Description :{carDetails.description}
        Price :{carDetails.price}
      </Card.Text>
      <Button variant="dark">More Details</Button>
    </Card.Body>
  </Card>
);
  
}

export default CarCards
