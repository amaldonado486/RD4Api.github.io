import React, { useEffect, useState } from 'react';
import Header from './../Components/Header';
import CardPizza from './CardPizza';


const Home = () => {
const [pizzas, setPizzas] = useState([]);

const url = "http://localhost:5000/api/pizzas";

const getPizzas = async () => {  
  const response = await fetch(url);
  const data = await response.json();
  setPizzas(data);
  };


  useEffect(() => {
    getPizzas();
  }, []);

return (
  <div>
    <Header />
    <div className="d-flex justify-content-around flex-wrap">
      {pizzas.map((pizza, index) => (
        <CardPizza key={index} {...pizza} />
      ))}
    </div> 
  </div>
);
 
};

export default Home;
