import React from 'react';
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
import {TbPlant2} from "react-icons/tb";


const Navbarlg= () => {
  return (
    <>
    <nav className='hidden lg:flex flex-row container mx-auto p-8 items-start w-full'>
        <p className='font-bold italic text-xl basis-1/4 flex gap-2 items-center'>Knowlege Hunt <TbPlant2 className='text-2xl'/></p>
        <div className='basis-3/4 flex gap-16 font-semibold text-gray-700 '>
        <p >Home</p>
        <p >Categories</p>
        <p >MyBooks</p>
       <div className='w-full flex gap-3 items-center border-2 rounded-sm px-1'>
       <input type="search" 
        name="" 
        id="" 
        placeholder='Search For any books' 
        className='text-sm px-1 py-2 w-full outline-none' 
        />
        <AiOutlineSearch className='text-2xl'/>
       </div>
       
        </div>
        <div className='flex basis-2/12 justify-end gap-8 items-center text-gray-800 font-semibold'>
        <AiOutlineShoppingCart className='text-2xl' />
        <p>Login</p>
        <p>SignUp</p>
        
        </div>
        
    </nav>
  
    </> 
  )
}

 const Navbarsm = () => {
  return (<>
  <nav className='block container mx-auto px-2 lg:hidden'>
    <div className='flex justify-between  py-3'>
    <div className='flex lg:hidden'>
      <p className='font-semibold text-lg flex gap-2 items-center italic '>Knowledge hunt <TbPlant2 className='text-2xl'/></p>
    </div>
    <div className='flex gap-2 items-center'>
        <AiOutlineShoppingCart className='text-2xl' />
        <p>Login</p>
        <p>SignUp</p>
    </div>
    </div>
    <div className='w-full flex items-center border-2 rounded-sm  '>
       <input type="search" 
        name="" 
        id="" 
        placeholder='Search For any books' 
        className='text-sm mx-1 my-2 w-full outline-none' 
        />
        <AiOutlineSearch className='text-2xl'/>
       </div>
    
       </nav>
   
    </>
  )
}


export const Navbar=()=>{
  return <>
  <Navbarlg />
  <Navbarsm />
  </>
}