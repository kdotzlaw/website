
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
import bioImg from '../img/bio.png';
import fStackImg from '../img/fStack.png';

//Cards
import peace from '../img/peace.png';
import mlEsn from '../img/ml-nn.jpg';
import sb from '../img/study-buddy.png';
import sbFlow from '../img/flowdiagram.png';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState('all');

    const handleProjectSelect = (project) => {
        setSelectedProject(project);
    };
    
    return (
        <div id='body' className="pt-12"> {/* Added padding-top to account for nav */}
            <div id='projects-header' className="py-16">
                <div className="container mx-auto text-center ">
                    <h1 className="text-6xl font-bold  cursor-pointer" onClick={()=>handleProjectSelect('all')}>Projects</h1>
                    
                    <div id='img-link' className='flex justify-center space-x-4'>
                        <img src={reactImg} alt='React Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('react')}/>
                        <img src={fStackImg} alt='Frontend Stack' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('fstack')}/>
                        <img src={flaskImg} alt='Flask Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('flask')}/>
                        <img src={sqlImg} alt='SQL Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('sql')}/>
                        <img src={pythonImg} alt='Python Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('python')}/>
                        <img src={bioImg} alt='BioInformatics Logo' className="w-16 h-16 object-contain rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => handleProjectSelect('bio')}/>
                    </div>
                    
                    <div className='py-4 grid grid-cols-1 w-3/4 gap-6  mx-auto text-center text-wrap'>
                        {[
                            {
                                types: ['all', 'python'],
                                header:'Analyzing Covid-19 Data to Predict Long Covid-19 Cases',
                                images: [
                                    { src: pythonImg, alt: 'Python Logo' },
                                    
                                ],
                                url:'https://github.com/rdotzlaw/COMP4710-Group-11',
                                description: 'A group project that analyzed COVID-19 data using Python and data mining techniques',
                                sub: `This is a subheader`,
                                sub_content:'COntent',
                                footer:'Results',
                                result:[
                                    'test1',
                                    'test2'
                                ]
                            },
                            {
                                types:['all', 'python'],
                                header:'',
                                images: [
                                    { src: pythonImg, alt: 'Python Logo' },
                                    
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/Blockchain',
                                description: `A distributed computing  project that connected to an external network and communicated with other peers to perform tasks such as sending and receiving messages, and storing data on the blockchain.`
                            },
                            {
                                types:['all', 'bio','python'],
                                header:'',
                                images: [
                                    {src:bioImg, alt: 'BioInformatics Logo'},
                                    
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Hidden_Markov_Models',
                                description: `HMM.`
                            },
                            {
                                types:['all', 'bio','python'],
                                header:'',
                                images: [
                                    { src: bioImg, alt: 'BioInformatics Logo' },
                                    
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Multiple_Sequence_Alignment',
                                description: `MSA.`
                            },
                            {
                                types:['all', 'bio','python'],
                                header:'',
                                images: [
                                    { src: bioImg, alt: 'BioInformatics Logo' },
                                    
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Neighbour_Joining',
                                description: `NJ.`
                            },
                            {
                                types:['all', 'bio','python'],
                                header:'',
                                images: [
                                    {src:bioImg, alt: 'BioInformatics Logo'},
                                    
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Pattern_Matching',
                                description: `Pattern Matching`
                        
                            },
                              
                            {
                                types: ['all', 'sql'],
                                header:'',
                                images: [
                                    { src: sqlImg, alt: 'SQL Logo' }
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/QueryOptimization.pdf',
                                description: 'A research project that compared non-optimized SQLite queries to queries optimized with B+ indexes'
                            },
                            {
                                types: ['all', 'python'],
                                header:'',
                                images: [
                                    { src: mlEsn, alt: 'Echo State Network' },
                                  
                                ],
                                url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/ESN-MachineLearning',
                                description: ' An Echo State Network created with Python to recognize temporal patterns like k-step ahead forecasting'
                            },
                            {
                                types:['all','sql','python'],
                                header:'',
                                images: [
                                    { src: sb, alt: 'Study Buddy', id: 'sb' }
                                ],
                                url:'https://github.com/kdotzlaw/StudyBuddy',
                                description: `I worked as a database engineer and technical writer for a fullstack web application designed to help students manage their study schedules. I built
                                        the backend using MSSQL and Python, and created database integration tests using Python unittest. All database queries used prepared statements and
                                        parameterized queries to prevent SQL injection attacks. I collaborated with our Server Manager to ensure that the database successfully integrated with the Flask server.
                                        I also worked with our CI/CD lead to ensure that the backend was successfully deployed with GitHub Actions and Docker.
                                        As a technical writer, I created project documentation including a wiki, milestone reports, test plans, and meeting minutes. 
                                        I also performed load testing with Locust to ensure that the application could handle high traffic and concurrent requests.`,
                                additionalContent: <img src={studyBuddyArch} alt='Data Analysis Diagram' id='studyBuddyArch' className="mt-4" />
                            },
                            {
                                types: ['all', 'fstack'],
                                header:'',
                                images: [
                                    { src: peace, alt: 'Peace Lutheran Church Website' },
                                   
                                ],
                                url: 'https://peacelc.com',
                                description: 'A user-friendly and organization-focused website built with Wordpress and custom HTML/CSS'
                            }
                        ].map((project, index) => (
                            project.types.includes(selectedProject) && (
                                <article key={index} className='card flex bg-white shadow-lg rounded-lg p-6 h-full w-full'>
                                    <div className='flex flex-col items-center w-1/3 mr-4'>
                                        {project.images.map((image, imgIndex) => (
                                            <img 
                                                key={imgIndex}
                                                src={image.src} 
                                                alt={image.alt} 
                                                className="w-full h-auto max-h-64 object-contain rounded mb-2 cursor-pointer hover:scale-105 transition-transform duration-300" 
                                            />
                                        ))}
                                    </div>
                                    <div className='flex flex-col justify-between w-2/3'>
                                        <div>
                                            <h1 className='py-6 text-left font-bold'>{project.header}</h1>
                                            <p className='py-2 text-left'>{project.description}</p>
                                            {project.additionalContent}
                                            <h2 className='py-2 text-left font-semibold'>{project.sub}</h2>
                                            <p className='py-2 text-left'>{project.sub_content}</p>
                                            <h2 className='py-2 text-left font-semibold'>{project.footer}</h2>
                                                {project.result && project.result.length > 0 && (
                                                    <ul className="list-disc list-inside">
                                                        {project.result.map((res, index) => (
                                                            <li key={index} className="text-left">{res}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                        </div>
                                        <div className='flex justify-center mt-4'>
                                            <button onClick={() => project.url && window.open(project.url)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                                View Project
                                            </button>
                                        </div>
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
