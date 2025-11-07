import React from "react";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios'

const ProductGrid = ({ addToCart }) => {
  const [products, SetProducts] = useState([])
  useEffect(() => {
    const GetallProdcuts = async () => {
      try {
        const Product = await axios.get("http://localhost:5000/api/products/new")
        console.log(Product.data.message)
      }
      catch (err) {
        return console.log(err.message, 'Error from the product api')
      }
    }
    GetallProdcuts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transform transition-all duration-300"
          />
          {/* Price badge */}
          <span className="absolute top-3 right-3 bg-white/80 text-gray-800 px-3 py-1 rounded-lg font-semibold shadow">
            ₹{product.price}
          </span>

          {/* Overlay button */}
          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg font-semibold hover:scale-105 transform transition-all duration-200"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>

          {/* Product Name */}
          <div className="absolute bottom-3 left-3 bg-white/80 px-3 py-1 rounded-lg font-medium text-gray-800 shadow">
            {product.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
