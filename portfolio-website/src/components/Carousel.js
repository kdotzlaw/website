import React, { useState } from 'react';





const ProjectCarousel = ({ project }) => {
   
    const [projectDetail, setProjectDetail] = useState(null);
   
    if (!project) {
        return null;
      }
    return (
        <div className='mt-8 card'>
            <div className='flex flex-col md:flex-row gap-8 h-[600px] overflow-y-auto'>
                <div className='md:w-1/3 flex flex-col'>
                <div className="flex-1 flex flex-col items-center justify-start">
                    {/*Map  Images if there are any*/}
                    {project.images?.map((image, index) => (
                    <img 
                        key={index}
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full max-h-64 object-contain rounded mb-4"
                    />
                    ))}
                </div>
               
                    <button 
                        onClick={() => setProjectDetail(project)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                    >
                        View Project Details
                    </button>
                    {/* Project Detail View*/}
                    {projectDetail && (
                        <div className='project-detail'>
                                {project.sub && (
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
                                    )}
                        </div>
                    )}
              
                </div>
                
                <div className='md:w-2/3 overflow-y-auto'>
                <h2 className='text-2xl font-bold mb-4'>{project.header}</h2>
                <p className='mb-4'>{project.description}</p>
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