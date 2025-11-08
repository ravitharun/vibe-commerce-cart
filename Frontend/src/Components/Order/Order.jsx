import React from "react";
import { FaCheckCircle, FaShoppingBag, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Order() {
    const location = useLocation();
  const { orderId } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center animate-fadeIn">

        {/* Animated Tick Icon */}
        <FaCheckCircle className="mx-auto w-20 h-20 text-green-500 animate-bounce animate-pulse" />

        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Order Confirmed! ✅
        </h2>

        <p className="text-gray-500 mt-2">
          Thank you for shopping! Your order has been placed successfully.
        </p>

        <div className="bg-gray-100 rounded-xl p-4 mt-6 text-left">
          <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <FaShoppingBag className="w-5 h-5" /> Order Summary
          </h3>

          <p className="text-gray-600 mt-2">• Order ID: {orderId}</p>
          <p className="text-gray-600">• Estimated Delivery: 4–6 Days</p>
        </div>
        <Link to="/">
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            Continue Shopping <FaArrowRight className="w-5 h-5" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Order;
