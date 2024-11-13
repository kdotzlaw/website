import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
    <nav id='nav' className='bg-gray-100 p-4 fixed h-full w-64 z-50 top-0 right-0 shadow-lg flex flex-col justify-between'>
      <div>
        <ul className="space-y-4">
          <li id='nav-item'><a href='#home' className="block py-2 px-4 hover:bg-gray-200 rounded">Home</a></li>
          <li id='nav-item'><a href='#about' className="block py-2 px-4 hover:bg-gray-200 rounded">About</a></li>
          <li id='nav-item'><a href='#projects' className="block py-2 px-4 hover:bg-gray-200 rounded">Projects</a></li>
          <li id='nav-item'><a href='#contact' className="block py-2 px-4 hover:bg-gray-200 rounded">Contact</a></li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-center space-x-4">
          <li id='nav-item'>
            <a href='https://www.linkedin.com/in/kdotzlaw' target="_blank" rel="noopener noreferrer">
              <i id='social' className="fa-brands fa-linkedin text-2xl text-blue-600 hover:text-blue-800"></i>
            </a>
          </li>
          <li id='nav-item'>
            <a href='https://github.com/kdotzlaw' target="_blank" rel="noopener noreferrer">
              <i id='social' className="fa-brands fa-github text-2xl text-gray-800 hover:text-gray-600"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
