import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CarSpecsModal({ show, onHide, specs }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Car Specifications</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
        <li>Model: {specs.model}</li>

        <li>Year: {specs.year}</li>
        
          <li>Make: {specs.make}</li>

          <li>Transmission: {specs.transmission}</li>

          <li>Drive: {specs.drive}</li>

          <li>Interior: {specs.interior}</li>

          <li>Availability: {specs.availability}</li>

          <li>Mileage: {specs.mileage}</li>

          <li>Engine: {specs.engine}</li>

        </ul>

      </Modal.Body>

      <Modal.Footer>

        <Button variant="secondary" onClick={onHide}>

          Close

        </Button>

      </Modal.Footer>

    </Modal>

  );

}


export default CarSpecsModal;