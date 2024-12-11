import React from 'react';
//import '../styles/Nav.css';
import '../styles/main.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header id='nav' className='p-4 fixed w-full z-50 top-0 left-0 text-white nav-container '>
      <nav className='container mx-auto flex justify-between items-center nav-content'>
      <ul className="flex space-x-6 nav-links">
          <li id='nav-item'><Link to ='/' className="py-2 px-4 nav-link">Home</Link></li>
          <li id='nav-item'><Link to ='#projects' className="py-2 px-4 nav-link">Projects</Link></li>
          <li id='nav-item'><Link to='#blog' className="py-2 px-4 nav-link">Blog</Link></li>
          <li id='nav-item'><Link to='/' className="py-2 px-4 nav-link">Contact</Link></li>
        </ul>
          {/*Social Links*/}
      <ul className="flex space-x-4 social-links">
          <li id='nav-item'>
            <a href='https://www.linkedin.com/in/kdotzlaw' target="_blank" rel="noopener noreferrer">
              <i id='social' className="fa-brands fa-linkedin text-2xl text-blue-600 hover:text-blue-800 social-icon"></i>
            </a>
          </li>
          <li id='nav-item'>
            <a href='https://github.com/kdotzlaw' target="_blank" rel="noopener noreferrer">
              <i id='social' className="fa-brands fa-github text-2xl text-gray-800 hover:text-gray-600 social-icon"></i>
            </a>
          </li>
        </ul>
      </nav>
    
    </header>
  );
};
export default Nav;
