import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Product from "./pages/Product";
import PlaceOrder from './PlaceOrder';
import Navbar from "./component/Navbar";
import Footer from './component/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 9000); // 
  }, []);

  return (
    <div className='px-4 sm:px-[1vw] md:px-[2vw] lg:px-[3vw] app'>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <span className='loader'></span>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Order />} />
            <Route path='/login' element={<Login />} />
            <Route path='/place-order' element={<PlaceOrder />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
