import React from 'react'
import ProductsGrid from './Components/ProductGrid'
import Cart from './Components/Cart/Cart'
import CheckoutForm from './Components/Checkout/CheckoutForm'

function App() {
  return (
    <>
      <ProductsGrid></ProductsGrid>
      {/* <Cart></Cart> */}
      <CheckoutForm></CheckoutForm>
    </>
  )
}

export default App
