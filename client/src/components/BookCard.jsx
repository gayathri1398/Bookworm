import React from 'react'



const BookCard = (props) => {
  return (
  <>
     <div className='w-56 border'>
        <div className='w-full '>
        <img src={props.image}
         alt={props.title} 
         className='w-full'/>
        </div>
        <div className='flex flex-col gap-2 py-3 px-1'>
        <h1 className='text-gray-600 text-md font-bold'>{props.title}</h1>
        <p className='text-gray-400 text-sm '>{props.description}</p>
       <div className='flex gap-2'>
       <span className='text-red-500'>₹120</span><p className='line-through'>₹{props.price} </p>
       </div>
        </div>
         </div>
        </>
  )
}

export default BookCard;