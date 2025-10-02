import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Utils/Slices/cart-slice';

export default function CartTile({ cartItem }) {

  const dispatch = useDispatch();

    function handleRemoveFromCart(){
      dispatch(removeFromCart(cartItem));

    }

  return (
    <div className='flex flex-col items-center p-5 bg-gray-500 mt-2 rounded-xl'> 
    <div className='flex p-3'>
      <img src={cartItem.image} alt={cartItem.name} className='w-32 h-32 object-cover mb-2' />
      <h2 className='text-lg font-bold'>{cartItem.name}</h2>
      <div className='display relative'>
      <p className='text-white font-bold text-lg'>${cartItem.price}</p>
      </div>
      </div>
      <div>
         <button onClick={handleRemoveFromCart}
         className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>
            Remove From Cart
           </button>
      </div>
    </div>
  )
}
