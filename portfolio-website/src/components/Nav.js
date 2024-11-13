import React from 'react';

const Nav = () => {
  return (
    <nav className="fixed top-0 right-0 p-4">
      <ul className="flex flex-col space-y-4">
        <li>
          <a href="#home" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
