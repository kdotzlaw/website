import React from 'react';

const Nav = () => {
  return (
   <nav class = "bg-black p-4 fixed w-full top-0 z-50 shadow-lg">
    <div class="container mx-auto flex items-center justify-between">
        <div class="text-white font-bold text-2xl">
            Katrina's Portfolio
        </div>
        <ul class="flex space-x-6 text-white">
            <li><a href='#home' class="hover:text-red-500">Home</a></li>
            <li><a href='#about' class="hover:text-red-500">About</a></li>
            <li><a href='#projects' class="hover:text-red-500">Projects</a></li>
            <li><a href='#contact' class="hover:text-red-500">Contact</a></li>
        </ul>
    </div>
   </nav>
   
  );
};

export default Nav;
