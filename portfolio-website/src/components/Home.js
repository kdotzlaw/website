import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div id='home-body' className="pr-64"> {/* Added padding-right to account for sidebar */}
      <div id='home-header' className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">Hello World</h1>
        </div>
      </div>
      <div id='home-content' className="container mx-auto py-8">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Home;
