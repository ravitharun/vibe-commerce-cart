// CartLayout.jsx
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Cart = ({ addToCart,cartItems, removeFromCart }) => {
  console.log(addToCart,'addToCart')
  const total = cartItems?.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      {/* Left: Products */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No products in the cart.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3 p-3 border rounded shadow hover:shadow-lg transition"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500">Qty: {item.qty}</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">₹{item.price * item.qty}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right: Bill / Summary */}
      <div className="w-full md:w-1/3 p-4 border rounded shadow bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Bill Summary</h2>
        <p className="mb-2">Items: {cartItems.length}</p>
        <p className="font-semibold text-lg mb-4">Total: ₹{total}</p>
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
