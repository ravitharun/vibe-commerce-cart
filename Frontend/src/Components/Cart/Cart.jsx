// CartLayout.jsx
import { Activity, useEffect } from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Getemail from "../UserEmail";
import axios from "axios";
import CheckoutForm from "../Checkout/CheckoutForm";
import Navbar from "../Navbar";

const Cart = () => {
  const [CartItems, setcart] = useState([])
  const [checkout, Setcheckout] = useState(false)
  useEffect(() => {
    const GetCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart/", {
          params: { Getemail: Getemail }
        });

        console.log(response.data.message); // cart items
        setcart(response.data.message);
      } catch (error) {
        console.log(error.message, "from the cart items display");
      }
    };

    GetCart();
  }, [Getemail]);


  console.log(CartItems, 'CartItems')


  // count total
  const total = CartItems?.reduce((acc, item) => acc + item.total * item.qty, 0).toFixed(2);





  //removeFromCart 
  const removeFromCart = async (id) => {

    try {
      console.log(id,'id')
      const DeletedCartItem = await axios.delete(
        `http://localhost:5000/api/cart/${id}/${Getemail}`
      );
      console.log(DeletedCartItem.data.message == 'delted the item');
      if (DeletedCartItem.data.message == 'delted the item') {
        alert(DeletedCartItem.data.message)
        setcart(prev => prev.filter(item => item.productId !== id));
      }
    } catch (err) {
      alert(err.message);
    }
  };




  // Showcart
  const Showcart = () => {

    Setcheckout((prev) => !prev)
  }

  return (
    <>


      <Navbar></Navbar>
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Left: Products */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Products</h2>
          {CartItems?.length == 0 ? (
            <p className="text-gray-500">No products in the cart.</p>
          ) : (
            CartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-3 p-3 border rounded shadow hover:shadow-lg transition"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.qty}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p className="font-semibold">₹{item.total.toLocaleString()}</p>
                  <button
                    onClick={() => removeFromCart(item.productId)}
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
          <p className="mb-2">Items: {CartItems.length}</p>
          <p className="font-semibold text-lg mb-4">Total: ₹{total.toLocaleString("")}</p>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={Showcart}>
            {checkout ? 'Cancel Checkout' : 'Checkout'}
          </button>
        </div>
      </div>
      <Activity mode={checkout ? "visible" : "hidden"}>
        <CheckoutForm CartItems={CartItems} />
      </Activity>
    </>
  );
};

export default Cart;
