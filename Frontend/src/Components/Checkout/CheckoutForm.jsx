import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios'
// Add this in your index.html or import in main CSS:
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

const CheckoutForm = ({ onCheckout, cartItems, total }) => {
  console.log({ onCheckout, cartItems, total })
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [Error, setErrormessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (name != "" || phone != "" || email != "" || address != "") {
      return setErrormessage("Fil the required feilds")
    }
    const checkoutForm = {
      name,
      email,
      phone,
      address
    }
    console.log(checkoutForm, 'checkoutForm')
    const postformdata = await axios.post("", {
      checkoutForm
    })
    console.log(postformdata.data.message,'postformdata')

  };

  return (
    <>

      <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10 px-4 font-sans" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {Error && <div className="bg-red-300 font-mono">
          <button className="bg-blue-500 p-2 cursor-pointer">Close</button>
          {Error}
        </div>}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8">

          {/* Left: Checkout Form */}
          <div className="flex-1 bg-gray-100 rounded-3xl shadow-md p-8 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Checkout</h2>
            <p className="text-gray-600 mb-6">Fill in your details to complete the order</p>

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                required
                className="w-full border border-gray-300 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="w-full border border-gray-300 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhoneAlt className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
                className="w-full border border-gray-300 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white"
              />
            </div>

            {/* Address */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute top-3 left-4 text-gray-400" />
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Shipping Address"
                required
                className="w-full border border-gray-300 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none bg-white"
                rows={3}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transform transition-all duration-200"
            >
              Place Order
            </button>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-1/3 bg-gray-100 rounded-3xl shadow-md p-6 space-y-4">
            <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
            {cartItems?.length === 0 ? (
              <p className="text-gray-500">No items in cart</p>
            ) : (
              cartItems?.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-2">
                  <p className="font-medium">{item.name} x {item.qty}</p>
                  <p className="font-semibold">₹{item.price * item.qty}</p>
                </div>
              ))
            )}
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>₹{total}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
