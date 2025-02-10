import React, { useState } from 'react';
import {pizzas} from '../Components/pizzas.js';

const Cart = ()=>
{
  const [cart, setCart] = useState(pizzaCart);

  return(    

    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      {cart.map((pizza, index) => (
        <div key={index} className="d-flex justify-content-between align-items-center mb-3">
          <img src={pizza.img} alt={pizza.name} style={{ width: '50px' }} />
          <div>
            <h5>{pizza.name}</h5>
            <p>Precio: {pizza.price}</p>
            <p>Cantidad: {pizza.quantity}</p>
          </div>
          <div>
            <button className="btn btn-outline-primary" onClick={() => mas(index)}>+</button>
            <button className="btn btn-outline-danger mx-2"  key ={index} onClick={() => menos(index)}>-</button>
          </div>
        </div>
      ))}
      <h4>Total: {total}</h4>
      <button className="btn btn-success">Pagar</button>
    </div>
  )};
export default Cart;
