/*import React from 'react';

import '../styles/Home.css';
import profilePic from '../img/kat1.jpg';

const Home = () => {
  return (
   
      <div id='home-header' className="py-16 ">
        <div className="container mx-auto text-center text-pretty max-w-3xl px-4 card">
          <h1 className="py-4 text-6xl md:text-4xl font-bold">Katrina Dotzlaw</h1>
          <h2 className='text-3xl md:text-3xl py-4'>Software Developer</h2>
          <div className="py-4 text-pretty flex-1 bg-teal bg-opacity-10 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-8 text-left bg-gunmetal shadow-lg rounded-lg overflow-hidden card">
              <img src={profilePic} alt="Katrina Dotzlaw" className="w-64 h-64 object-cover rounded-full"/>
              <div className="flex-1 card" id='about'>
                <h2 className='text-3xl mb-4'>About Me</h2>
                <article className='text-pretty'>
                  <p className="text-wrap">
                    I am a recent graduate of the University of Manitoba with a Bachelor's degree in Computer Science,
                    specializing in Software Engineering, Artificial Intelligence, and Databases. 
                  </p>
                </article>
              </div>
            </div>
            <div className='text-left bg-gunmetal shadow-lg rounded-lg overflow-hidden card mt-8' id='tech'>
              <article className='py-4 text-pretty flex-1'>
                <h2 className="text-3xl mb-4 px-4">Skills & Technologies</h2>
                <p className="text-wrap px-4">
                    <ul className="space-y-3 text-sm md:text-base" id='skills'>
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">Web Development: </strong>React, JavaScript, HTML, CSS, TailwindCSS, Bootstrap</span></li>
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">Databases: </strong>MSSQL, MySQL, SQL Server, SQLite</span></li>
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">Software Development: </strong>Python, Java, C#, C++, JavaScript, SDLC, OOP, Agile, Technical Documentation</span></li>
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">API & Server-side Development: </strong>Flask, Node.js</span></li>
                    
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">Machine Learning: </strong>Neural Networks, Decision Trees, Random Forests</span></li>
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">Data Analysis & Bioinformatics: </strong>Python, Biopython, Matplotlib, Numpy, Data Mining & Rule Association</span></li>
                    <li className="flex items-start"><span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md"><svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg></span><span><strong className="font-semibold">Tools: </strong>Git, GitHub, VS Code, PyCharm, Jupyter Notebook, SQL Server Management Studio, MySQL Workbench</span></li>
                    </ul>
                </p>
              </article>
            </div>
            
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Home;
*/

import React from 'react';
import '../styles/Home.css';
import Projects from '../components/Projects';


const Home = () => {
  return (
    <div className="min-h-screen bg-gunmetal text-white py-48"> {/* Added padding-top to account for header navigation */}
     
        <div className='container mx-auto w-3/4'>
          {/*Home Header*/}
          <div className=' flex flex-col items-center justify-center  ' id='home'>
            <div className=" h-screen text-center w-full " id='home-header'>
              <h3 className="text-5xl md:text-4xl font-bold mb-4 bg-white text-transparent bg-clip-text">Katrina Dotzlaw</h3>
              {/*Tagline/Brief Description*/}
              <h1 className="text-3xl md:text-2xl font-medium mb-6 text-gray-200">Software Developer</h1>
              <p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  I am a recent graduate of the University of Manitoba with a Bachelor's degree in Computer Science, specializing in Software Engineering, Artificial Intelligence, and Databases.
              </p>
               {/*About Me */}
            <div className="py-8 px-6 bg-opacity-10 bg-teal w-full max-w-4xl mx-auto">
              <h3 className='text-2xl font-semibold mb-4 text-teal-300'>About Me</h3>
              <p className='text-gray-200 leading-relaxed'>
                
                I am a recent graduate of the University of Manitoba with a Bachelor's degree in Computer Science, specializing in Software Engineering, Artificial Intelligence, and Databases.
                
                </p>
            </div>
            </div>{/*End Home Header*/}
            {/*Links to contact and projects??
            <div className='btn-group row d-flex align-items-center justify-content-center flex-row pb-4 gy-4'>
              <div className='col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center'> 
                <a href='#' className='btn btn-outline-primary'>Contact</a>
              </div>
              <div className='col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center'>
                <a href='#' className='btn btn-outline-primary'>Projects</a>
              </div>
              
            </div>
            */}
           

            {/*Category Tiles*/}
              <section className='  bg-black text-white ' data-aos='fade-up' data-aos-duration='1000'> 
                <article className=' pt-5 pb-5' id='projects'>
                  <Projects />
                </article>
              </section>
              <section className='bg-gunmetal text-white'>
                <article id='project-detail'>

                </article>
              </section>
          
          
          </div>
        </div>

    </div>
  )};

  export default Home;