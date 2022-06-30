import React from 'react';

// components
import BookCard from '../components/BookCard';
import HomePageCarousel from '../components/HomePageCarousel';


const HomePage = () => {
  return <>
  <h1 className='text-gray-600 text-xl py-3 mt-8'>Best Sellers</h1>
  <div>
  {/* <BookCard/> */}
  <HomePageCarousel/>
  </div>
  </>
}

export default HomePage