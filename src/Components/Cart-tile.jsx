import React from 'react'

export default function CartTile({ cartItem }) {
    function handleRemoveFromCart(){

    }

  return (
    <div className='flex flex-col items-center p-5 bg-gray-500 mt-2 rounded-xl'> 
    <div className='flex p-3'>
      <img src={cartItem.image} alt={cartItem.name} className='w-32 h-32 object-cover mb-2' />
      <h2 className='text-lg font-bold'>{cartItem.name}</h2>
      <p className='text-gray-600'>${cartItem.price}</p>
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
