import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';




const ProjectCarousel = ({ project }) => {
   
   const navigate = useNavigate();
   const handleProjectClick = () =>{
       navigate(`/projects/${project.id}`);
   }
    if (!project) return null;
    return (
        <div className='pt-12  text-white carousel-container'>
            {/*className='w-full max-w-4xl mx-auto bg-opacity-5 bg-white rounded-lg p-6 min-h-[600px] flex flex-col md:flex-row gap-8 '*/}
            <div onClick={handleProjectClick} className='w-full max-w-4xl mx-auto bg-opacity-5 bg-white rounded-lg p-4 sm:p-6 flex flex-col md:flex-row gap-4 sm:gap-8'>
                {/* <div className='md:w-1/3 flex flex-col justify-between h-full'>*/}
                <div className='md:w-1/3 flex flex-col justify-start gap-4'>
                <div className="flex-1 flex flex-col items-center justify-start gap-4">
                    {/*Map  Images if there are any*/}
                    {project.images?.map((image, index) => (
                    <img 
                        key={index}
                        src={image.src} 
                        alt={image.alt} 
                        //className="w-full max-h-48 object-contain rounded "
                        className="w-full max-h-36 sm:max-h-48 object-contain rounded"
                    />
                    ))}
                </div>
            </div>
                
                {/*<div className='md:w-2/3 overflow-y-auto max-h-[500px] px-4'>*/}
                <div className='md:w-2/3 px-2 sm:px-4'>
                    {/*<h2 className='text-2xl font-bold mb-4'>{project.header}</h2>*/}
                    <h2 className='text-xl sm:text-2xl font-bold mb-2 sm:mb-4'>{project.header}</h2>
                    {/*<p className='mb-4'>{project.description}</p>*/}
                    <p className='mb-2 sm:mb-4 text-sm sm:text-base'>{project.description}</p>
                    {/* 
                      {project.footer && (
                        <div className='mb-4'>
                            <h3 className='text-xl font-semibold mb-2'>{project.footer}</h3>
                            <ul className='space-y-4'>
                                {project.summary?.map((item, index) => (
                                <li key={index} className='flex items-start'>
                                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md">
                                        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span>{item.content}</span>
                                </li>
                                ))}
                            </ul>
                    </div>
                )}
                    */}
                    {project.footer && (
                                <div className='mb-2 sm:mb-4'>
                                    <h3 className='text-lg sm:text-xl font-semibold mb-2'>{project.footer}</h3>
                                    <ul className='space-y-2 sm:space-y-4'>
                                        {project.summary?.map((item, index) => (
                                        <li key={index} className='flex items-start'>
                                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 mr-2 bg-teal bg-opacity-20 rounded-md">
                                                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span className="text-sm sm:text-base">{item.content}</span>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                  
               {/*} {project.sub && (
                    <>
                    <h3 className="text-xl font-semibold mb-2">{project.sub}</h3>
                    <p className="mb-4">{project.sub_content}</p>
                    </>
                )}
                {project.footer && (
                    <div className='mb-4'>
                    <h3 className='text-xl font-semibold mb-2'>{project.footer}</h3>
                    <ul className='list-disc list-inside'>
                        {project.result?.map((item, index) => (
                        <li key={index} className='mb-2'>
                            {item.content}
                        </li>
                        ))}
                    </ul>
                    </div>
                )}*/}
            </div>
        </div>
    </div>            
    );
};

export default ProjectCarousel;