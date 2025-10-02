import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../Components/Cart-tile";
import { useSelector } from "react-redux";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      const total = cartItems.reduce((acc, curr) => acc + (curr.price || 0), 0);
      setTotalCart(total);
    }
  }, [cartItems]);
  console.log(cartItems,totalCart);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {cartItems && cartItems.length ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
       
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Shopping Cart
            </h2>
            {cartItems.map((cartItem) => (
              <CartTile cartItem={cartItem} key={cartItem.id} />
            ))}
          </div>

      
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
                Cart Summary
              </h3>
              <p className="text-gray-700 mb-2">
                Items in cart:{" "}
                <span className="font-semibold">{cartItems.length}</span>
              </p>
              <p className="text-gray-700 mb-4">
                Total Amount:{" "}
                <span className="font-bold text-red-900">
                  ${totalCart.toFixed(2)}
                </span>
              </p>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-4 bg-red-900 hover:bg-red-800 text-white py-3 rounded-lg font-semibold transition duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
       
        <div className="flex flex-col items-center justify-center h-[70vh] text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-6">
            Add items to your cart to see them here.
          </p>
          <Link to="/">
            <button className="bg-red-900 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-300">
              Go back to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
