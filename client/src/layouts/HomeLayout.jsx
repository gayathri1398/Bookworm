import React from 'react';
import { Outlet } from 'react-router-dom';

import {Navbar} from '../components/Navbar';

const HomeLayout = (props) => {
  return <>
  <div className='px-2 lg:px-20 py-8'>
  <Navbar/>
  <Outlet/>
  </div>
   {/* {props.children} */}

  </>
}

export default HomeLayout