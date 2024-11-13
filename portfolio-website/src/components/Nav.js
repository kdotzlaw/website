import React from 'react';

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 p-4 bg-white shadow-md z-50">
      <ul className="flex justify-end space-x-4 list-none">
        <li>
          <a href="#home" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full transition duration-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-full transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
