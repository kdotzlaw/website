import React from 'react';
import '../styles/Nav.css';

const Nav = () => {
  return (
   <nav id='nav' className='bg-white p-4 fixed w-full z-50 top-0 shadow-lg ' >
    <div className="container mx-auto flex items-center justify-between">
       
        <ul className="top-0 right-0 flex space-x-4">
            <li id='nav-item' ><a href='#home' >Home</a></li>
            <li id='nav-item' ><a href='#about' >About</a></li>
            <li id='nav-item' ><a href='#projects' >Projects</a></li>
            <li id='nav-item' ><a href='#contact'>Contact</a></li>
        </ul>
        <ul className="flex space-x-4">
            <li id='nav-item'>
                <a href='https://www.linkedin.com/in/kdotzlaw' target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </li>
            <li id='nav-item'>
                <a href='https://github.com/kdotzlaw' target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
        </ul>
    </div>
   </nav>
  );
};

export default Nav;
