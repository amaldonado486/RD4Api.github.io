import './App.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import CardPizza from './views/CardPizza';
import Cart from './views/Cart';
import NotFound from './views/NotFound';
import { Route, Routes } from 'react-router-dom';

const App = () => (
  
  <>
    <div className="d-flex flex-column justify-content-between min-vh-100">
      <Navbar />
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CardPizza/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Home/>
      <Footer />
    </div>

  </>
);

export default App
