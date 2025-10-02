import React from "react";
import { Link } from "react-router-dom";
import Cart from "../Pages/Cart";
import { BsCart } from "react-icons/bs";
import ThemeSwitcher from "./ThemeSwitcher";


export default function Header() {
  return (
    <nav className="flex items-center justify-between h-20 px-8 bg-white shadow-md ">
      <ThemeSwitcher />
  
      <Link to="/" className="flex items-center">
        <h1 className="text-red-900 font-bold text-2xl tracking-wide hover:text-red-700 transition-colors duration-200">
          Redux Shopping Cart
        </h1>
      </Link>

     
      <div className="flex items-center justify-evenly space-x-8 font-semibold">
        <Link
          to="/"
          className="text-gray-700 hover:text-red-700 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/cart"
          className="text-gray-700 hover:text-red-700 transition-colors duration-200"
        >
         <BsCart/>
        </Link>
      </div>
    </nav>
  );
}
