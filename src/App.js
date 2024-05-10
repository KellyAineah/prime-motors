import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CarsList from "./components/CarsList";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { LogIn } from "./components/LogIn";
import SellYourCar from "./SellYourCar";
import Cart from "./components/cart";
import {Register} from './components/Register'
import Contact from './components/Contact';

function App() {
  
const[cartItems,setCartItems]=useState([])
useEffect(()=>{
  fetch("http://localhost:4000/cars")
  .then((r)=>r.json())
  .then((data)=>setCartItems(data))
},[])

const handleAddCar = (car) =>{
  const carExists = cartItems.find((item) => 
    item.id === car.id)
    if(carExists){
      setCartItems(cartItems.map((item) => item.id === car.id ?
       {...carExists, quantity: carExists.quantity +1}: item))
    }
    else{
      setCartItems([...cartItems, {...car, quantity: 1}])
    }
}

const handleRemoveProduct = (car) =>{
  const carExists = cartItems.find((item) => 
    item.id === car.id)
    if(carExists.quantity === 1){
      setCartItems(cartItems.filter)((item)=> item.id !== car.id)
    } else {
      setCartItems(
        cartItems.map((item) => item.id === car.id ? {...carExists, quantity: carExists.quantity - 1}
      : item)
      )
    }
}


    const[carsData,setCarsData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/cars")
        .then((r)=>r.json())
        .then(data=>setCarsData(data))
    },[])
    const [currentForm, setCurrentForm] = useState('login'); 

    const toggleForm = () => {
      setCurrentForm((prevForm) => (prevForm === "login" ? "register" : "login"));

    };
    const getComponent = () => {

      if (currentForm === "login") {
  
        return <LogIn onFormSwitch={toggleForm} />;
  
      } else {
  
        return <Register onFormSwitch={toggleForm} />;
  
      }
  
    };

  return (
    <div>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={getComponent()} />
        <Route path="/cars" element={<CarsList cars={carsData} cartItems={cartItems} handleAddCar={handleAddCar}/>} />
        <Route path="/sellyourcar" element={<SellYourCar />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleRemoveCar={handleRemoveProduct} handleAddCar={handleAddCar}/>} />
        <Route path="/contactUs" element={<Contact />} />
      </Routes>

      {/*<Home />

      <LogIn />
      <SellYourCar />
        {/*<CarsList cars={carsData}/>*/}
      {/*<CarSpecsModal specs={carsData}/>*/}
    </div>
  );
  
}

export default App;
