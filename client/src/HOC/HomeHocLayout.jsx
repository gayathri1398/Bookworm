import React from 'react';
import {Route,Routes} from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const HomeHocLayout = ({Component,...rest}) => {
  return <>
  {/* <Routes>
  <Route {...rest} 
    element={<HomeLayout/>}/> */}
    
    <HomeLayout>
        <>
        <div>
            this is success
        </div>
        </>
    </HomeLayout>
    {/* </Routes> */}
  </>
}

export default HomeHocLayout;