import React from 'react'
import CarCards from './CarCards'
import "./CarsList.css"
export default function CarsList({cars}) {
    return (
      <div className='card-container'>
        <h2>Cars Available</h2>
          {cars.map((c)=>{
            return(
              <CarCards key={c.id} carDetails={c}/>
            )
          })}
      </div>
    )
    }
  

