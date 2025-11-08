import React from 'react'
import ProductsGrid from './Components/ProductGrid'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart/Cart'
import { Routes, Route, Link } from "react-router-dom";
import CheckoutForm from './Components/Checkout/CheckoutForm';


function App() {
  return (
    <>



      <Routes>

        <Route path="/" element={<ProductsGrid />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
      </Routes>

    </>
  )
}

export default App
