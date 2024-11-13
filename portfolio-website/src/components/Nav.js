import React from 'react';

const Nav = () => {
  return (
   <nav className="bg-black p-4 fixed w-full top-0 z-50 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
            Katrina's Portfolio
        </div>
        <ul className="flex space-x-6 text-white">
            <li><a href='#home' className="hover:text-red-500">Home</a></li>
            <li><a href='#about' className="hover:text-red-500">About</a></li>
            <li><a href='#projects' className="hover:text-red-500">Projects</a></li>
            <li><a href='#contact' className="hover:text-red-500">Contact</a></li>
        </ul>
    </div>
   </nav>
  );
};

export default Nav;
