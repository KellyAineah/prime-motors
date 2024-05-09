import React, { useEffect, useState } from 'react'
import CarsList from './components/CarsList'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarSpecsModal from './components/CarSpecsModal';
import Home from './components/Home'
import Navbar from './components/Navbar'
import { LogIn }  from './components/LogIn';
import SellYourCar from "./SellYourCar";
import  { Register } from './components/Register';
 function App() {
    const[carsData,setCarsData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/cars")
        .then((r)=>r.json())
        .then(data=>setCarsData(data))
    },[])
    const [currentForm, setCurrentForm] = useState('login'); 

    const toggleForm = (formName) => {
      setCurrentForm(formName);
    };
  return (
    <div>
      <Navbar />
      <Home />
      <SellYourCar />
        <CarsList cars={carsData}/>
        <CarSpecsModal specs={carsData}/>
        {currentForm === 'login' ? (
        <LogIn onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} 
    </div>
  )
}

export default App;












