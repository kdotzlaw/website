import React from 'react';
import '../styles/Home.css';

const Home = () => {
    
  return (
    <div id='home-body' className="pr-64"> {/* Added padding-right to account for sidebar */}
      <div id='home-header' className="py-16" >
        <div className="container mx-auto text-left" >
            <h1 className="text-8xl font-bold ">Hello World</h1>
            <h2 className=' text-4xl py-8'>Job Title</h2>
        
            <h2 className='text-2xl'>About Me</h2>
            <p className='py-4'>Bio goes here</p>
        
        </div>
      </div>
      <div id='home-content' className="container mx-auto py-4 text-center">
        <div id='curr-proj-container mx-auto text-right'>
            <h2 className='text-2xl'>Current Projects</h2>
            <p className='py-4'>Projects go here</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
