import React, { useEffect, useRef, useState } from 'react';
import { FaBars,FaTimes } from 'react-icons/fa'
import icon from '../../assets/apple.png';

const CustomHeader = () => {
    const menuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const { current } = menuRef;
        if (isMenuOpen) {
            current.style.transform = "translateX(0%)";
        } else {
            current.style.transform = "translateX(100%)";
        }
    }, [isMenuOpen]);
    return (
        <div className='flex justify-between lg:mx-10'>
            <div className="">
                <img className='h-[50px]' src={icon} alt="" />
            </div>
            <div className="flex flex-col-reverse lg:block">
                <ul ref={menuRef} className={`${isMenuOpen? "block duration-1000 ease-in-out absolute right-0 left-60 z-10 top-10 h-full bg-purple-800 transition-all":"hidden"} lg:flex lg:space-x-4`}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Connect</li>
                </ul>
                <div className="block lg:hidden">
                 {isMenuOpen || <button onClick={()=>setIsMenuOpen(true)}> <FaBars className='text-2xl z-20'/></button> }
                 {isMenuOpen && <button onClick={()=>setIsMenuOpen(false)}> <FaTimes className='text-2xl z-20'/></button> }
                </div>
            </div>
        </div>
    );
};

export default CustomHeader;