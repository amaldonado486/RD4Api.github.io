import React, { useState } from 'react';
import {pizzas} from './pizzas.js';

const CardPizza = ()=>
{
   const [Pizzas, setPizzas] = useState(pizzas);


  return(    
      <div style={{display:'flex', flexWrap:'wrap'}}> 
      
      {Pizzas.map((pizz,index)=>
      (
        <div className="card" style={{ width: '18rem', margin: '1rem' }} key={index}>
          <img src={pizz.img} className="card-img-top" alt={pizz.name} />
          <div className="card-body">
            <h5 className="card-title">{pizz.name}</h5>
            <p className="card-text">
              <strong>Ingredientes:</strong> {pizz.ingredients.join(', ')}
            </p>
            <p className="card-text">
              <strong>Precio:</strong> ${pizz.price.toLocaleString('es-CL')}
            </p>
            <div className="d-flex justify-content-start">
              <button className="btn btn-light btn-sm me-3" >Ver más</button>
              <button className="btn btn-dark btn-sm" >Añadir 🛒</button>
            </div>
          </div>
        </div>
      )      
      )}
      
    </div>

    )}

    
     

export default CardPizza;
