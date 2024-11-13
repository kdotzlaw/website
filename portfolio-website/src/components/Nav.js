import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
   <nav id='nav' className='bg-white p-4 fixed w-full z-50 top-0 shadow-lg ' >
    <div className="container mx-auto flex items-center justify-between">
        <div id='nav-header' className=" font-bold text-2xl">
            Katrina's Portfolio
        </div>
        <ul className="flex space-x-6">
            <li id='nav-item' ><a href='#home' >Home</a></li>
            <li id='nav-item' ><a href='#about' >About</a></li>
            <li id='nav-item' ><a href='#projects' >Projects</a></li>
            <li id='nav-item' ><a href='#contact'>Contact</a></li>
        </ul>
    </div>
   </nav>
  );
};

export default Nav;
