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
  const [Message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" && phone == "" && email == "" && address == "") {
      return setmessage("Fil the required feilds")
    }

    const checkoutForm = {
      name,
      email,
      phone,
      address
    }
    console.log("checkoutForm", checkoutForm)



  };

  return (
    <>

      <div
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-start py-14 px-4"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">

          {/* Left: Checkout Form */}
          <div className="flex-1 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl px-10 py-8 border border-gray-200 relative">

            {/* ALERT at top of form */}
            {Message && (
              Message === "The checkoutform is submitted" ? (
                //SUCCESS ALERT
                <div className="mb-5 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-xl shadow-sm flex justify-between items-center">
                  <span>{Message}</span>
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded-lg"
                    onClick={() => setmessage("")}
                  >
                    Close
                  </button>
                </div>
              ) : (
                //ERROR ALERT
                <div className="mb-5 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-xl shadow-sm flex justify-between items-center">
                  <span>{Message}</span>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                    onClick={() => setmessage("")}
                  >
                    Close
                  </button>
                </div>
              )
            )}


            <h2 className="text-3xl font-semibold text-gray-800">Checkout</h2>
            <p className="text-gray-500 mb-8">Enter your details to complete the purchase</p>

            <div className="space-y-5">
              {/* Name */}
              <div className="relative">
                <FaUser className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-xl px-12 py-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
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
                  className="w-full border border-gray-300 rounded-xl px-12 py-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
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
                  className="w-full border border-gray-300 rounded-xl px-12 py-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Address */}
              <div className="relative">
                <FaMapMarkerAlt className="absolute top-4 left-4 text-gray-400" />
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Shipping Address"
                  required
                  className="w-full border border-gray-300 rounded-xl px-12 py-3 bg-white shadow-sm focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full py-3 mt-2 text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:w-1/3 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-5">Order Summary</h3>

            {cartItems?.length === 0 ? (
              <p className="text-gray-500">No items in cart</p>
            ) : (
              cartItems?.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b pb-3 mb-3">
                  <p className="font-medium">{item.name} × {item.qty}</p>
                  <p className="font-semibold text-gray-800">₹{item.price * item.qty}</p>
                </div>
              ))
            )}

            <div className="flex justify-between font-bold text-xl pt-4">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>

        </div>
      </div>


    </>
  );
};

export default CheckoutForm;
