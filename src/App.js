import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CarsList from "./components/CarsList";
import "bootstrap/dist/css/bootstrap.min.css";
import CarSpecsModal from "./components/CarSpecsModal";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { LogIn } from "./components/LogIn";
import SellYourCar from "./SellYourCar";
import Contact from './components/Contact';
import {Register} from './components/Register'
function App() {
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
        <Route path="/cars" element={<CarsList cars={carsData} />} />
        <Route path="/sellyourcar" element={<SellYourCar />} />
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
