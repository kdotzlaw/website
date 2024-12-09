import React from 'react';


const ProjectCarousel = ({ project }) => {
    if (!project) {
        return null;
      }
    return (
        <div className='mt-8 card'>
            <div className='flex flex-col md:flex-row gap-8 h-[600px] overflow-y-auto'>
                <div className='md:w-1/3 flex flex-col'>
                <div className="flex-1 flex flex-col items-center justify-start space-y-4">
                    {/*Map  Images if there are any*/}
                    {project.images?.map((image, index) => (
                    <img 
                        key={index}
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full max-h-64 object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                    ))}
                </div>
                {project.url && (
                    <button 
                    onClick={() => window.open(project.url)} 
                    className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-600"
                    >
                    View Project
                    </button>
                )}
                </div>
                <div className='md:w-2/3 overflow-y-auto space-y-4 text-left'>
                    <h2 className='text-2xl font-bold '>{project.header}</h2>
                    <p className='text-pretty'>{project.description}</p>
                    {project.sub && (
                        <div className='bg-teal bg-opacity-10 rounded-lg p-4'>
                            <h3 className="text-2xl font-semibold mb-2">{project.sub}</h3>
                            <p className="text-pretty">{project.sub_content}</p>
                        </div>
                    )}
                    {project.footer && (
                        <div className='bg-teal bg-opacity-10 rounded-lg p-4'>
                            <h3 className='text-2xl font-semibold mb-2'>{project.footer}</h3>
                            <ul className='space-y-2'>
                                {project.result?.map((item, index) => (
                                <li key={index} className='flex items-start'>
                                    <span className='inline-flex items-center justify-center w-6 h-6 mr-2 bg-teal bg-opacity-20 rounded-md'>
                                        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span> {item.content}</span>
                                </li>
                                ))}
                            </ul>
                            </div>
                        )}
            </div>
        </div>
    </div>            
    );
};

export default ProjectCarousel;