import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-evenly h-20 px-8 bg-white shadow-md">
      <Link to="/" className="flex items-center">
        <h1 className="text-red-900 font-bold text-2xl tracking-wide hover:text-gray-700 transition-colors duration-200">
          Redux Shopping Cart
        </h1>
      </Link>
      <div className="flex items-center w-[800px] justify-evenly space-x-4 font-semibold">
        <Link
          to="/"
          className=" text-gray-700 hover:text-gray-700 transition-colors duration-200 space-x-5"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="text-gray-700 hover:text-gray-700 transition-colors duration-200"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}

