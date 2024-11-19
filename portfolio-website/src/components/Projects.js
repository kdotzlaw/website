
import React, { useState } from 'react';

//Style Imports
import '../styles/Home.css';
import '../styles/Projects.css';

//Architecture Imgs
//import esnImage from '../img/esn.JPG';
import studyBuddyArch from '../img/StudyBuddyArch.png';

//Logos
import flaskImg from '../img/flask.png';
import reactImg from '../img/react.png';
import pythonImg from '../img/python.png';
import sqlImg from '../img/sql.png';

import fStackImg from '../img/fStack.png';

//Cards
import peace from '../img/peace.png';
import mlEsn from '../img/ml-nn.jpg';
import sb from '../img/study-buddy.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState('all');

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
    };
    
    return (
        <div id='body' className="pt-12"> {/* Added padding-top to account for nav */}
            <div id='projects-header' className="py-16">
                <div className="container mx-auto text-left ">
                    <h1 className="text-6xl font-bold  cursor-pointer" onClick={()=>handleProjectSelect('all')}>Projects</h1>
                    
                    <div id='imgs' className='flex justify-left space-x-4'>
                        <img src={reactImg} alt='React Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('react')}/>
                        <img src={fStackImg} alt='Frontend Stack' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('fstack')}/>
                        <img src={flaskImg} alt='Flask Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('flask')}/>
                        <img src={sqlImg} alt='SQL Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('sql')}/>
                        <img src={pythonImg} alt='Python Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('python')}/>
                        
                    </div>
                    
                    <div className='py-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4'>
                        {[
                            {
                                types: ['all', 'python'],
                                img: pythonImg,
                                alt: 'Data Analysis on COVID-19 Data',
                                url:'https://github.com/rdotzlaw/COMP4710-Group-11',
                                description: 'A group project that analyzed COVID-19 data using Python and data mining techniques'
                            },
                            {
                                types: ['all', 'fstack'],
                                img: peace,
                                alt: 'Peace Lutheran Church Website',
                                url: 'https://peacelc.com',
                                description: 'A user-friendly and organization-focused website built with Wordpress and custom HTML/CSS'
                            },
                           
                            {
                                types: ['all', 'sql'],
                                img: sqlImg,
                                alt: 'Query Optimization',
                                url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/QueryOptimization.pdf',
                                description: 'A research project that compared non-optimized SQLite queries to queries optimized with B+ indexes'
                            },
                            {
                                types: ['all', 'python'],
                                img: mlEsn,
                                alt: 'Echo State Network',
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/ESN-MachineLearning',
                                description: ' An Echo State Network created with Python to recognize temporal patterns like k-step ahead forecasting'
                            },
                            {
                                types:['all','sql','python'],
                                img: sb,
                                alt: 'Study Buddy',
                                url:'https://github.com/kdotzlaw/StudyBuddy',
                                description: `I worked as a database engineer and technical writer for a fullstack web application designed to help students manage their study schedules. I built
                                        the backend using MSSQL and Python, and created database integration tests using Python unittest. All database queries used prepared statements and
                                        parameterized queries to prevent SQL injection attacks. I collaborated with our Server Manager to ensure that the database successfully integrated with the Flask server.
                                        I also worked with our CI/CD lead to ensure that the backend was successfully deployed with GitHub Actions and Docker.
                                        As a technical writer, I created project documentation including a wiki, milestone reports, test plans, and meeting minutes. 
                                        I also performed load testing with Locust to ensure that the application could handle high traffic and concurrent requests.`
                            }
                        ].map((project, index) => (
                            project.types.includes(selectedProject) && (
                                <article key={index} className='card flex flex-col justify-between bg-white shadow-lg rounded-lg p-6 h-full'>
                                    <div className='flex flex-col items-center'>
                                        <img 
                                            src={project.img} 
                                            alt={project.alt} 
                                            className="w-full h-auto max-h-48 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" 
                                            onClick={() => project.url && window.open(project.url)}
                                        />
                                        <p className='text-center mt-4'>{project.description}</p>
                                    </div>
                                </article>
                            )
                        ))}
                    </div>

                    </div>
                </div>
            

                    
                </div>
                
            
    );
}

export default Projects;
