import React, { useEffect, useState } from 'react'
import CarsList from './components/CarsList'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarSpecsModal from './components/CarSpecsModal';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { LogIn } from './components/LogIn';
import SellYourCar from "./SellYourCar";



 function App() {
    const[carsData,setCarsData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/cars")
        .then((r)=>r.json())
        .then(data=>setCarsData(data))
    },[])
  

  return (
    <div>
      <Navbar />
      <Home />
      <LogIn />
      <SellYourCar />
        <CarsList cars={carsData}/>
        <CarSpecsModal specs={carsData}/>
    </div>
  )
}



export default App;











