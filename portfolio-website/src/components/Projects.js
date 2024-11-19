
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
import locustImg from '../img/locust.png';
import fStackImg from '../img/fStack.png';

//Cards
import peace from '../img/peace.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState('all');

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
    };
    
    return (
        <div id='body' className="pt-12"> {/* Added padding-top to account for nav */}
            <div id='projects-header' className="py-16">
                <div className="container mx-auto text-left ">
                    <h1 className="text-6xl font-bold ">Projects</h1>
                    
                    <div id='imgs' className='flex justify-left space-x-4'>
                        <img src={reactImg} alt='React Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('react')}/>
                        <img src={fStackImg} alt='Frontend Stack' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('fstack')}/>
                        <img src={flaskImg} alt='Flask Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('flask')}/>
                        <img src={sqlImg} alt='SQL Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('sql')}/>
                        <img src={pythonImg} alt='Python Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('python')}/>
                        <img src={locustImg} alt='Locust Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('locust')}/>
                    </div>
                    
                    {(selectedProject === 'all' || selectedProject === 'fstack') && (
                        <div id='fStack-dev' className='py-4 flex flex-row space-x-4'>      
                            <article className='card flex flex-col items-center bg-white shadow-lg rounded-lg p-6 flex-1'>
                                <img src={peace} alt='Peace Lutheran Church Website' id='card-img' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto" onClick={() => window.open('https://peacelc.com')}/>
                                <p className='py-4 text-center'> A user-friendly and organization-focused website built with Wordpress and custom HTML/CSS</p>
                            </article>
                            
                        </div>
                    )}
                    {(selectedProject === 'all' || selectedProject === 'sql') && (
                        <div id='sql-dev' className='py-4 flex flex-row space-x-4'>
                             <article className='card flex flex-col items-center bg-white shadow-lg rounded-lg p-6 flex-1'>
                                <img src={sqlImg} alt='this website' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto" />
                                <p className='py-4 text-center'>This portfolio website built with React and Tailwind CSS</p>
                            </article>
                        </div>
                    )}

                    </div>
                </div>
            

                    {/*<div id='sql-dev' className='py-4'>
                    {sqlExpanded && (
                        <div id='sql-dev' className='flex flex-col items-center'>
                                <article className='card flex flex-col items-center'>
                                    <img src={sqlImg} alt='SQLite Website' id='card-img' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto" onClick={() => window.open(sqlImg, '_blank')}/>
                                    <p className='py-4 text-center'> A user-friendly and user-focused website built with Wordpress and custom HTML/CSS</p>

                                </article>
                        </div>
                    )}


                        
                    <article>
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={toggleQueryOp}>
                                Query Optimization    
                                <span className={`ml-2 transform ${queryOpExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            
                            {queryOpExpanded && (
                                <article>
                                    <a href='https://github.com/kdotzlaw/UniversityProjects/blob/main/QueryOptimization.pdf' id='text-link' >
                                    <h6 className='text-[12px]'>View the project on GitHub</h6>
                                    </a>
                                    <p className='text-wrap'>
                                    A research project that compared non-optimized SQLite queries to queries optimized with non-clustered B+ tree indexes, including
                                    covering indexes and partial indexes. Analyzed storage space and pages used per database entry using DB Browser for SQLite.
                                    Concluded that queries optimized with indexes reduced the amount of unused bytes on pages and that queries optimized with covering indexes
                                    had consistently faster run times. Additionally, data skewing was found to negatively impact run times of queries optimized with indexes on single
                                    columns.
                                    </p>
                                </article>   
                                )}
                            
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={toggleStudyBuddy}>
                                StudyBuddy
                                <span className={`ml-2 transform ${studyBuddyExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            
                            {studyBuddyExpanded && (
                                <article>
                                    <a href='https://github.com/kdotzlaw/StudyBuddy' id='text-link' >
                                        <h6 className='text-[12px]'>View the project on GitHub</h6>
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
                           
                        </article>
                    
                    </div>
                    <div id='fullstack' className='py-4 '>
                        <h2 id='header-indv-project'className='py-4 font-bold cursor-pointer flex items-center' onClick={toggleFullstack}>
                            Fullstack Development
                            <span className={`ml-2 transform ${fullstackExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                        </h2>
                        {fullstackExpanded && (
                            <article className='text-wrap'>
                                 
                                <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={togglePeaceDB}>
                                    Database Manager    
                                    <span className={`ml-2 transform ${peaceDBExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                                </h3>
                            {peaceDBExpanded && (
                                <article>
                                    
                                    <a href='https://github.com/kdotzlaw/peace_admin' id='text-link' >
                                    <h6 className='text-[12px]'>View the project on GitHub</h6>
                                    </a>
                                    <p className='text-wrap'>
                                    A web application built for Peace Lutheran Church that allows users to interact with the database with minimal programming knowledge.
                                    The application was built using React, Python, JavaScript, HTML/CSS, Flask, and SQL. 
                                    </p>
                                    
                                </article>
                            )}

                            </article>
                            )}
                    </div>
                    
                    
                    <div id='data-science' className='py-4 '>
                    <h2 id='header-indv-project'className='py-4 font-bold cursor-pointer flex items-center' onClick={toggleData}>
                        Machine Learning & Data Science
                        <span className={`ml-2 transform ${dataExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                    </h2>
                    {dataExpanded && (
                        <article className='text-wrap'>
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={toggleESN}>
                                Echo State Network
                                <span className={`ml-2 transform ${esnExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            {esnExpanded && (
                                <article className='text-wrap'>
                                      <p className='text-wrap'>
                                        An ESN is a type of recurrent neural network created with Python to recognize temporal patterns like k-step ahead forecasting. 
                                        Specifically, ESNs use backpropagation to feed optimized hyperparameters back into its recurrent internal state.
                                      </p>
                                      
                                      <a className='text-[12px]' href="https://github.com/kdotzlaw/UniversityProjects/blob/main/ESN-MachineLearning/ESN.ipynb" id='text-link' >
                                        View the project on GitHub
                                      </a>
                                      <p className='text-wrap'>
                                        Explores machine learning concepts like error calculation via MSE, backpropagation, ridge regression,
                                        sigmoid activation functions, and hyperparameter tuning.
                                        All visualization was done using matplotlib and numpy. 
                                    </p>

                                </article>

                            )}
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={togglePM}>
                                Comparison of Pattern Matching Methods
                                <span className={`ml-2 transform ${pmExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            {pmExpanded &&(
                                <article>
                                    <a className='text-[12px]' href="https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Pattern_Matching" id='text-link' >
                                        View the project on GitHub
                                      </a>
                                    <p className='text-wrap'>
                                       Compares the runtimes of a brute force approach to pattern matching and the Knuth-Morris-Pratt approach to pattern matching, both using the 
                                       Sorangium cellulosum genome. Analysis includes identifying patterns that have significantly faster runtimes when using KMP.
                                       Implementation was done using Python and the BioPython library. 
                                    </p>
                                </article>
                            )}
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={toggleMSA}>
                                Multiple Sequence Alignment with ClustalW
                                <span className={`ml-2 transform ${msaExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            {msaExpanded && (
                                <article>
                                    <a className='text-[12px]' href="https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Multiple_Sequence_Alignment" id='text-link' >
                                        View the project on GitHub
                                      </a>
                                    <p className='text-wrap'>
                                        Performs multiple sequence alignment using a custom implementation of ClustalW. This implementation
                                        builds a dynamic programming table based on given sequences and fills it based on calculated sum of pairs scores. Optimal
                                        alignments are identified by tracing back through the table.
                                        Implementation was done using Python, numpy, and  the BioPython library.
                                    </p>
                                </article>
                            )}
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={toggleNJ}>
                                Neighbour Joining with Distal Matrices
                                <span className={`ml-2 transform ${njExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            {njExpanded && (
                                <article>
                                     <a className='text-[12px]' href="https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Neighbour_Joining" id='text-link' >
                                        View the project on GitHub
                                      </a>
                                    <p>
                                        A recursive Python implementation of neighbour joining using unions of distances to create delta matrix values, and using Fitch-Margoliash
                                        to join neighbours in the base case.
                                    </p>
                                </article>
                            )}
                            <h3 className='py-4 font-semibold cursor-pointer flex items-center' onClick={toggleHMM}>
                                Hidden Markov Models
                                <span className={`ml-2 transform ${hmmExpanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                            </h3>
                            {hmmExpanded && (
                                <article>
                                <a className='text-[12px]' href="https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Hidden_Markov_Models" id='text-link' >
                                        View the project on GitHub
                                      </a>
                                      <p>
                                        A Python implementation of a Hidden Markov Model using a set of abstract states, an alphabet of output tokens, a transition probability
                                        matrix, an emission probability matrix, and the Forward algorithm to find the total probability that the HMM produces a given output sequence.
                                        The implementation was done using Python and the pandas library.
                                    </p>
                                </article>
                            )}


                                
                                
                            </article>
                        )}
                    </div>*/}
                </div>
                
            
    );
}

export default Projects;
