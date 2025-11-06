// Cart.jsx
import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="p-4 border rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-2">
            <div>
              <p>{item.name}</p>
              <p className="text-gray-500">Qty: {item.qty}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>₹{item.price * item.qty}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <hr className="my-2" />
      <p className="font-semibold text-lg">Total: ₹{total}</p>
    </div>
  );
};

export default Cart;
