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
        <ul className="">
            
            <li id='nav-item' >
                <i class="fa-brands fa-linkedin" href='https://www.linkedin.com/in/kdotzlaw' > </i>
            </li>
            <li id='nav-item' >
                <i class="fa-brands fa-github" href='https://github.com/kdotzlaw' > </i>
                
            </li>
        </ul>
    </div>
   </nav>
  );
};

export default Nav;
