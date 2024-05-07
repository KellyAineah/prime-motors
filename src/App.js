import React, { useEffect, useState } from 'react'
import CarsList from './components/CarsList'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
    const[carsData,setCarsData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/cars")
        .then((r)=>r.json())
        .then(data=>setCarsData(data))
    },[])
  
  return (
    <div>
        <CarsList cars={carsData}/>
    </div>
  )
}


