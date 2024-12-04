import React from 'react';
import '../styles/Home.css';
import profilePic from '../img/kat1.jpg';

const Home = () => {
  return (
    <div id='body' className='pt-12 bg-gunmetal text-white'> {/* Added padding-top to account for header navigation */}
      <div id='home-header' className="py-16">
        <div className="container mx-auto text-left text-pretty max-w-3xl px-4">
          <h1 className="py-4 text-6xl md:text-8xl font-bold">Katrina Dotzlaw</h1>
          <h2 className='text-3xl md:text-4xl py-8'>Software Developer</h2>
          <div className="py-4 text-pretty flex-1 bg-teal bg-opacity-10 rounded-lg p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <img src={profilePic} alt="Katrina Dotzlaw" className="w-64 h-64 object-cover rounded-full"/>
              <div className="flex-1 card">
                <h2 className='text-3xl mb-4'>About Me</h2>
                <article className='text-pretty'>
                  <p className="text-wrap">
                    I am a recent graduate of the University of Manitoba with a Bachelor's degree in Computer Science,
                    specializing in Software Engineering, Artificial Intelligence, and Databases. 
                  </p>
                </article>
              </div>
            </div>
            <article className='py- text-pretty flex-1 card'>
              <h2 className="text-3xl mb-4"> Skills & Technologies</h2>
              <p className="text-wrap">
                  <ul className="list-disc list-inside text-pretty text-wrap" id='skills'>
                   <li><strong>Web Development: </strong>React, JavaScript, HTML, CSS, TailwindCSS, Bootstrap</li>
                   <li><strong>Databases:</strong> MSSQL, MySQL, SQL Server, SQLite</li>
                   <li><strong>Software Development:</strong>Python, Java, C#, C++, JavaScript,  SDLC, OOP, Agile, Technical Documentation</li>
                   <li><strong>API & Server-side Development: </strong>Flask, Node.js</li>
                   <li><strong>Machine Learning:</strong> Neural Networks, Decision Trees, Random Forests</li>
                   <li><strong>Data Analysis & Bioinformatics</strong> Python, Biopython, Matplotlib, Numpy,  Data Mining & Rule Association</li>
                   <li><strong>Tools:</strong> Git, GitHub, VS Code, PyCharm, Jupyter Notebook, SQL Server Management Studio, MySQL Workbench</li>
                  </ul>
                  
              </p>
            </article>
          </div>
        </div>
      </div>
      <div id='home-content' className="container mx-auto py-4 text-left max-w-3xl px-4">
        <div id='curr-proj-container' className="mx-auto text-left card">
          <h2 className='text-3xl mb-4'>Current Projects</h2>
          <div className='py-4 text-wrap bg-teal bg-opacity-10 rounded-lg p-6'>
            <ul className="list-disc list-inside">
              <li>A custom React app that allows the administrator to manage the church's database and volunteer management (ongoing)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
