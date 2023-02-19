// import { list } from 'postcss';
import React, { useState } from 'react';
import {FaBars, FaReact, FaTimes} from 'react-icons/fa';

const CustomHeader = () => {
  const [isOpen,setIsOpen]=useState(false);
  const menuList=[
    {
      name:"Home",
      className:"nav-link"
    },
    {
      name:"About",
      className:"nav-link"
    },
    {
      name:"Details",
      className:"nav-link"
    },
    {
      name:"Contact",
      className:"nav-link"
    },
  ]
  return (
    <nav className='flex justify-between'>
      <div className="ml-5">
        <FaReact className='h-10 w-10'/>
      </div>
      <div className="">
        <div className="lg:hidden">
          {
            isOpen ?<FaTimes onClick={()=>setIsOpen(!isOpen)} className='h-10 z-20 duration-1000 ease-in-out'/> : <FaBars onClick={()=>setIsOpen(!isOpen)} className='h-10 left-0 duration-1000 ease-in-out'/>
          }
        </div>
        {/* <div className="relative"> */}
        <ul className={`bg-white lg:flex lg:bg-tr justify-between mx-5 my-3 ${isOpen? " absolute top-4 right-[-10%] z-10 duration-500 w-[50%] h-[110vh] transition-all ease-in-out":" right-[-50%] z-10 duration-1000 md:duration-1000 h-[110vh] ease-out absolute"}`}>
        {/* {isOpen &&} */}
          {menuList.map(data=><li key={data.name} className='mx-5 font-bold cursor-pointer px-5 bg-indigo-500 rounded-full'>{data.name}</li>)}
        </ul>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default CustomHeader;