import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Projects</a></li>
          <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
