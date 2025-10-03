import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const location = useLocation();

  return (
    <nav
      className="
        sticky top-0 z-50
        flex items-center justify-between
        h-20 px-8
        bg-white/80 dark:bg-gray-900/80
        backdrop-blur-md
        shadow-lg
        border-b border-gray-200 dark:border-gray-700
        transition-all duration-300
      "
    >
    
      <Link
        to="/"
        className="flex items-center gap-2 group"
      >
        <h1 className="text-2xl font-bold tracking-wide text-red-900 dark:text-red-400 transition-colors">
          Redux <span className="text-gray-800 dark:text-gray-200 group-hover:text-red-700">Cart</span>
        </h1>
      </Link>

    
      <div className="hidden md:flex items-center gap-8 font-medium">
        {[
          { path: "/", label: "Home" },
      
        ].map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`
              relative
              ${location.pathname === link.path
                ? "text-red-700 dark:text-red-300 font-semibold"
                : "text-gray-700 dark:text-gray-200"
              }
              hover:text-red-700 dark:hover:text-red-300
              transition-colors
            `}
          >
            {link.label}
            {location.pathname === link.path && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-700 dark:bg-red-300 rounded-full"></span>
            )}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/cart"
          className="relative text-gray-700 dark:text-gray-200 hover:text-red-700 dark:hover:text-red-300 transition-colors"
        >
          <BsCart size={22} />

          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full px-1.5">

          </span>
        </Link>

        
      </div>
       <ThemeSwitcher/>
    </nav>
    
  );
}
