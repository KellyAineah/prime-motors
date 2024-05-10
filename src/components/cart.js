import React from "react"
import { Button } from "react-bootstrap"
import "./cart.css";


const Cart = ({cartItems, handleAddCar, handleRemoveCar}) => {
  const totalPrice = cartItems.reduce((price, item)=> price + item.quantity * item.price, 0)

    return (
    <div className="cart-items">
       <div className="cart-items-header">Cart Items</div>
         {cartItems.length === 0 &&(
           <div>No items are added</div>

       )}
       <div>
        {cartItems.map((item) =>(
          <div key={item.id} className="cart-items-list">
            <img 
              className="cart-items-image"
              src={item.image}
              alt={item.name}/>
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-items-functions">
                <Button className="cart-items-add"
                 onClick={() => handleAddCar(item)}>
                  + 
                 </Button>
                <Button className="cart-items-remove" 
                 onClick={() => handleRemoveCar(item)}>
                  -
                  </Button>
              </div>
              <div className="cart-items-price">
                {item.quantity} * ${item.price}

              </div>

          </div>
        ) )}
       </div>
       <div className="cart-items-total-price-name">
           Total price
           <div className="cart-Items-total-price">${totalPrice}</div>
       </div>
    </div>
  )
}

export default Cart