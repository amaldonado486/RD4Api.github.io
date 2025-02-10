import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const formatPrice = (price) => price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });

const Navbar = () => {
  const total = 25000;

  const token = false;
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-between align-items-center">
      <Link className="navbar-brand" to="/">🍕 Pizzería Mamma Mia</Link>
      <div>
        <Link className="btn btn-warning mx-1" to="/Login">🔐 Login</Link>
        <Link className="btn btn-warning mx-1" to="/Register">📝 Register</Link>
        <Link className="btn btn-warning mx-1" to="/Cart">🛒 Carrito</Link>
        <Link className="btn btn-warning mx-1" to="/profile">Profile</Link>
      </div>
    </div>
  </nav>

  );
};

export default Navbar;
