import React from "react";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios'
import Getemail from "../Components/UserEmail"
const ProductGrid = () => {
  const [products, SetProducts] = useState([]);


  useEffect(() => {
    const GetallProdcuts = async () => {
      try {
        const Product = await axios.get("http://localhost:5000/api/products/new")

        SetProducts(Product.data.message)
      }
      catch (err) {
        return console.log(err.message, 'Error from the product api')
      }
    }
    GetallProdcuts()
  }, [])




  const addToCart = async (id, Getemail,total) => {

    try {
      console.log({ id, Getemail })
      const Addcart = await axios.post("http://localhost:5000/api/cart/Addcart", { id, Getemail,total })
      if (Addcart.data.message == 'Added into cart') {
        return alert("Added into cart Addcar")
      }
       alert(Addcart.data.message)
     }
    
    catch (err) {
      return console.log(err.message, 'from the add to cart function ')
    }
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
        >
          {/* Product Image */}
          <div className="w-full h-48 overflow-hidden rounded-t-2xl">
            <img
              src={product.imgUrl}
              alt={product.name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="p-4 space-y-3">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h2>

            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-green-600">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <button
                onClick={() => addToCart(product._id, Getemail,product.price)}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full shadow hover:scale-105 transition-transform duration-200"
              >
                <FaShoppingCart />
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default ProductGrid;
