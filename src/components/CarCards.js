import React, { useState, useEffect } from "react";
import Cart from "./cart";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CarSpecsModal from "./CarSpecsModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./CarCards.css";


function CarCards({ carDetails, handleAddCar }) {
  const [showSpecsModal, setShowSpecsModal] = useState(false);
const [likes,setLikes]=useState(false)
  //Function to handle show specifications modal
  function handleShowSpecs() {
    setShowSpecsModal(true);
  }
  //Function to handle to hide specifications modal
  function handleHideSpecs() {
    setShowSpecsModal(false);
  }
  //Function to handle like and unlike a car on the Car's page
  function handleLike(){
    if(!likes){
      fetch(`http://localhost:4000/cars`,{
        method:"POST",
        headers:{"Content-Type":"application.json"},
        body:JSON.stringify({carLikeId:carDetails.id})
      })
      .then((r)=>r.json())
      .then(setLikes(true))
     
    }else{
      setLikes(false)
    }
  }
   
//   const[cartItems,setCartItems]=useState([])
// useEffect(()=>{
//   fetch("http://localhost:4000/cars")
//   .then((r)=>r.json())
//   .then(data=>setCartItems(data))
// },[])

//   const handleAddCar = (car) =>{
//     const carExists = cartItems.find((item) => 
//       item.id === car.id)
//       if(carExists){
//         setCartItems(cartItems.map((item) => item.id === car.id ?
//          {...carExists, quantity: carExists.quantity +1}: item))
//       }
//       else{
//         setCartItems([...cartItems, {...car, quantity: 1}])
//       }
//   }
  
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={carDetails.image} />
        <Card.Body>
          <Card.Title className="car-title">{carDetails.name}</Card.Title>

          <FontAwesomeIcon
            icon={faHeart}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color:"#FF1A1A",
            }}
            onClick={handleLike}
          />

          <Card.Text className="car-details">
            Model :{carDetails.model} <br />
            Description :{carDetails.description} <br />
            Price : Kshs.{carDetails.price}M
          </Card.Text>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button variant="dark" onClick={handleShowSpecs}>
              More Details
            </Button>
            <Button variant="dark" onClick={() =>handleAddCar(carDetails)}>
              Add to Cart
              <FontAwesomeIcon icon={faCartShopping} />
            </Button>
          </div>
        </Card.Body>
      </Card>
      {/*Responsible for hididng and showing the modal after clicking the More */}
      <CarSpecsModal
        show={showSpecsModal}
        onHide={handleHideSpecs}
        specs={carDetails}
      />
    </>
  );
}

export default CarCards;
