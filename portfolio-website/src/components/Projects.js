
import React, { useState } from 'react';
import '../styles/Home.css';
//import esnImage from '../img/esn.JPG';

import studyBuddyArch from '../img/StudyBuddyArch.png';
const Projects = () => {
    //Toggle each project section
    const [frontendExpanded, setFrontendExpanded] = useState(true);
    const [backendExpanded, setBackendExpanded] = useState(true);
    const [dataExpanded, setDataExpanded] = useState(true);
    const [fullstackExpanded, setFullstackExpanded] = useState(true);
    const toggleFrontend = () => {
        setFrontendExpanded(!frontendExpanded);
    };
    const toggleBackend = () => {
        setBackendExpanded(!backendExpanded);
    };
    const toggleData = () => {
        setDataExpanded(!dataExpanded);
    };
    const toggleFullstack = () => {
        setFullstackExpanded(!fullstackExpanded);
    };
    return (
        <div id='body' className="pr-64"> {/* Added padding-right to account for sidebar */}
            <div id='projects-header' className="py-16">
                <div className="container mx-auto text-left max-w-3xl">
                    <h1 className="text-6xl font-bold ">Projects</h1>
                    <div id='frontend-dev' className='py-4'>
                        <h2 id='header-indv-project' className='py-4 font-bold cursor-pointer flex items-center' onClick={toggleFrontend}>
                            Frontend Development
                            <span className={`ml-2 transform ${frontendExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                        </h2>
                        {frontendExpanded && (
                            <article>
                                <a href="https://www.peacelc.com" id='text-link' >
                                    <h3>Peace Lutheran Church Website</h3>
                                </a>
                                <p className='py-2 text-wrap'>
                                    Built using Wordpress and custom HTML/CSS.
                                </p>
                            </article>
                        )}
                    </div>
                    <div id='backend-dev' className='py-4'>
                    <h2 id='header-indv-project' className='py-4 font-bold cursor-pointer flex items-center' onClick={toggleBackend}>Backend Development
                    <span className={`ml-2 transform ${backendExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                    </h2>
                    {backendExpanded && (
                    <article>
                            <a href="https://github.com/kdotzlaw/UniversityProjects/blob/main/QueryOptimization.pdf" id='text-link' >
                                <h3 className='py-4 font-semibold'>Query Optimization</h3>
                            </a>
                            <p className='text-wrap'>
                               A research project that compared non-optimized SQLite queries to queries optimized with non-clustered B+ tree indexes, including
                               covering indexes and partial indexes. Analyzed storage space and pages used per database entry using DB Browser for SQLite.
                               Concluded that queries optimized with indexes reduced the amount of unused bytes on pages and that queries optimized with covering indexes
                               had consistently faster run times. Additionally, data skewing was found to negatively impact run times of queries optimized with indexes on single
                               columns.
                            </p>
                            <a href="https://github.com/kdotzlaw/StudyBuddy/blob/main/backend/db.py" id='text-link' >
                                <h3 className='py-4 font-semibold'>StudyBuddy</h3>
                            </a>
                             <img src = {studyBuddyArch} alt='StudyBuddy Architecture' className="w-[900px] h-[400px] object-cover rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open(studyBuddyArch, '_blank')}/>
                             <h6 className='text-[10px] text-center'>  Image by:</h6>
                             <a href='https://github.com/andreaabellera' id='text-link' >
                                <h6 className='text-[10px] text-center'>  Andrea Abellera</h6>
                             </a>
                             
                            <p className=' py-2 text-wrap'>
                                I worked as a database engineer and technical writer for a fullstack web application designed to help students manage their study schedules. I built
                                the backend using MSSQL and Python, and created database integration tests using Python unittest. All database queries used prepared statements and
                                parameterized queries to prevent SQL injection attacks. I collaborated with our Server Manager to ensure that the database successfully integrated with the Flask server.
                                I also worked with our CI/CD lead to ensure that the backend was successfully deployed with GitHub Actions and Docker.
                                As a technical writer, I created project documentation including a wiki, milestone reports, test plans, and meeting minutes. 
                                I also performed load testing with Locust to ensure that the application could handle high traffic and concurrent requests.
                            </p>
                           
                        </article>
                    )}
                    </div>
                    <div id='fullstack' className='py-4 '>
                        <h2 id='header-indv-project'className='py-4 font-bold cursor-pointer flex items-center' onClick={toggleFullstack}>
                            Fullstack Development
                            <span className={`ml-2 transform ${fullstackExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                        </h2>
                        {fullstackExpanded && (
                            <article className='text-wrap'></article>
                            )}
                    </div>
                    
                    
                    <div id='data-science' className='py-4 '>
                    <h2 id='header-indv-project'className='py-4 font-bold cursor-pointer flex items-center' onClick={toggleData}>
                        Machine Learning & Data Science
                        <span className={`ml-2 transform ${dataExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                    </h2>
                    {dataExpanded && (
                        <article className='text-wrap'>
                                <a href="https://github.com/kdotzlaw/UniversityProjects/blob/main/ESN-MachineLearning/ESN.ipynb" id='text-link' >
                                    <h3>Echo State Network</h3>
                                </a>
                                <p id='project-content' className='py-2 text-wrap'>
                                A type of recurrent neural network created with Python to recognize temporal patterns like k-step ahead forecasting. 
                                Specifically, ESNs use backpropagation to feed optimized hyperparameters back into its recurrent internal state.
                                </p>
                                <p id='project-content' className='py-2 text-wrap'>
                                    Explores machine learning concepts like error calculation via MSE, backpropagation, ridge regression,
                                    sigmoid activation functions, and hyperparameter tuning.
                                    All visualization was done using matplotlib and numpy. 
                                </p>
                                {/*<img src={esnImage} alt='An example of an ESN' className="w-[900px] h-[600px] object-cover rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open(esnImage, '_blank')}/>*/}
                                
                            </article>
                        )}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Projects;
