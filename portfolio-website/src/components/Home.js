import React from 'react';
import '../styles/Home.css';


const Home = () => {
    
  return (
    <div id='home-body' className="pr-64"> {/* Added padding-right to account for sidebar */}
      <div id='home-header' className="py-16" >
        <div className="container mx-auto text-left text-pretty" >
            <h1 className="text-8xl font-bold ">Katrina Dotzlaw</h1>
            <h2 className=' text-4xl py-8'>Software Developer</h2>
        
            <h2 className='text-2xl'>About Me</h2>
            <img src="" alt=""/>
            <article  className='py-4 text-pretty'>
            <p className="text-wrap">
                I am a recent graduate of the University of Manitoba with a Bachelor's degree in Computer Science,
                specializing in Software Engineering, Artificial Intelligence, and Databases.
            </p>
            </article>
            
        </div>
      </div>
      <div id='home-content' className="container mx-auto py-4 text-right">
        <div id='curr-proj-container mx-auto text-right'>
            <h2 className='text-2xl'>Current Projects</h2>
            <p className='py-4 text-wrap'>Projects go here</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
