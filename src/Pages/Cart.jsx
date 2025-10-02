import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../Components/Cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState([]);

  const cart = useSelector((state) => state);
  console.log(cart);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-3">
              {cart.map((cartItem) => (
                <CartTile cartItem={cartItem} key={cartItem.id} />
              ))}
            </div>
          </div>
          <div>
            <div className=" flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="text-gray-800 font-bold text-xl mb-2">
                Your Cart Summary{" "}
              </h1>
              <p>
                <span className="text-gray-600">
                  Items in cart: {cart.length}
                </span>
              </p>

              <p>
                <span className="text-gray-800 font-bold">
                  Total Amount: ${totalCart.toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <p>Add items to your cart to see them here.</p>
          <Link to="/">
            <button className="bg-red-900 text-white border-2 rounded-lg font-bold p-4">
              Go back to shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
