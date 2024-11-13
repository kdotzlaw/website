import React from 'react';

const Nav = () => {
  return (
   <nav className="bg-primary p-4 fixed w-full top-0 z-50 shadow-lg">
    <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
            Katrina's Portfolio
        </div>
        <ul className="flex space-x-6 text-white">
            <li><a href='#home' className="nav-link">Home</a></li>
            <li><a href='#about' className="nav-link">About</a></li>
            <li><a href='#projects' className="nav-link">Projects</a></li>
            <li><a href='#contact' className="nav-link">Contact</a></li>
        </ul>
    </div>
   </nav>
  );
};

export default Nav;
