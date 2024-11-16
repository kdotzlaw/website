
import React, { useState } from 'react';
import '../styles/Home.css';
import esnImage from '../img/esn.JPG';

const Projects = () => {
    //Toggle each project section
    const [frontendExpanded, setFrontendExpanded] = useState(false);
    const [backendExpanded, setBackendExpanded] = useState(false);
    const [dataExpanded, setDataExpanded] = useState(false);
    const toggleFrontend = () => {
        setFrontendExpanded(!frontendExpanded);
    };
    const toggleBackend = () => {
        setBackendExpanded(!backendExpanded);
    };
    const toggleData = () => {
        setDataExpanded(!dataExpanded);
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
                            <a href="" id='text-link' >
                                <h3>head</h3>
                            </a>
                            <p className='py-2 text-wrap'>
                                text
                            </p>
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
                                <img src={esnImage} alt='An example of an ESN' className="w-[900px] h-[600px] object-cover rounded my-4 cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open(esnImage, '_blank')}/>
                                
                            </article>
                        )}
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}

export default Projects;
