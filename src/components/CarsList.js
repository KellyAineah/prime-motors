import React from 'react'
import CarCards from './CarCards'
import "./CarsList.css"
export default function CarsList({cars, handleAddCar}) {
    return (
      <div className='card-container'>
          {cars.map((c)=>{
            return(
              <CarCards key={c.id} carDetails={c} handleAddCar={handleAddCar} />
            )
          })}
      </div>
    )
    }
  

