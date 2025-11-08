import { useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-gray-800">MyStore</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium text-gray-700">
          <Link to="/">
            <li className="cursor-pointer hover:text-blue-600 transition">Products</li>
          </Link>
          <Link to="/cart">
            <li className="cursor-pointer hover:text-blue-600 transition flex items-center gap-2">
              <FaShoppingCart /> Cart
            </li>
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-gray-50 w-full text-center py-3 space-y-3 border-t">
          <Link to="/">
          <p className="hover:text-blue-600 cursor-pointer">Products</p>
          </Link>
             <Link to="/cart">
          <p className="hover:text-blue-600 cursor-pointer flex justify-center gap-2">
            <FaShoppingCart /> Cart
          </p>
             </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
