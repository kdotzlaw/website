import React from 'react';
import '../styles/Nav.css';

const Nav = ({ switchComponent }) => {
  return (
    <header id='nav' className='bg-gray-100 p-4 fixed w-full z-50 top-0 left-0 shadow-lg'>
      <nav className='container mx-auto flex justify-between items-center'>
        <ul className="flex space-x-6">
          <li id='nav-item'><a href='#home' className="py-2 px-4" onClick={() => switchComponent('Home')}>Home</a></li>
          <li id='nav-item'><a href='#projects' className="py-2 px-4" onClick={() => switchComponent('Projects')}>Projects</a></li>
          <li id='nav-item'><a href='#courses' className="py-2 px-4" onClick={() => switchComponent('Edu')}>Education</a></li>
          <li id='nav-item'><a href='#publications' className="py-2 px-4" onClick={() => switchComponent('Publications')}>Publications</a></li>
          <li id='nav-item'><a href='#contact' className="py-2 px-4" onClick={() => switchComponent('Contact')}>Contact</a></li>
        </ul>
        <ul className="flex space-x-4">
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
      </nav>
    </header>
  );
};

export default Nav;
