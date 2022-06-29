import React from 'react'

const BookCard = () => {
  return (
    <div className='w-48 border'>
        <div className='w-full '>
        <img src="https://d2g9wbak88g7ch.cloudfront.net/productimages/mainimages/268/9789390166268.jpg"
         alt="book image" 
         className='w-full'/>
        </div>
        <div className='flex flex-col gap-2 py-3 px-1'>
        <h1 className='text-gray-600 text-md font-bold'>Book Title</h1>
        <p className='text-gray-400 text-sm '>Descriptipn</p>
       <div className='flex gap-2'>
       <span className='text-red-500'>₹120</span><p className='line-through'>₹150 </p>
       </div>
        </div>
        </div>
  )
}

export default BookCard;