import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Utils/Slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const isInCart = Array.isArray(cartItems) && cartItems.some(item => item.id === product.id)

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
    console.log("removed")
  }

  return (
    <div className="flex flex-col items-center border border-red-900 rounded-lg shadow-md p-4 transition hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-3"
      />
      <h2 className="font-semibold text-center text-gray-800 truncate w-40">
        {product.title}
      </h2>
      <p className="text-red-900 font-bold mt-2">${product.price.toFixed(2)}</p>

      <button onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
        className={`mt-4 w-full py-2 rounded-md font-semibold transition ${
          isInCart
            ? "bg-gray-200 text-red-900 border border-red-900 hover:bg-red-900 hover:text-white"
            : "bg-red-900 text-white border border-red-900 hover:bg-red-800"
        }`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}
