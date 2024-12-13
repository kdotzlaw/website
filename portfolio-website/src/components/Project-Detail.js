import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories, projects }  from './Projects';
import '../styles/main.css';
//A seperate page with project details added dynamically based on id
const ProjectDetail = ({projects}) => {
    //track details by project id
    const { projectId } = useParams();
    const project = projects?.find(p => p.id === parseInt(projectId));
    if (!project) return <div className="pt-20 text-center text-white">Project not found</div>;

    const handleClick = () => {
        window.open(project.url, "_blank");
      };
    return(
        <div id='project-detail' className='min-h-screen pt-16 pb-16 sm:pt-20 px-4 sm:px-8 lg:px-12 text-white flex justify-center items-start'>
              <div className='container mx-auto w-3/4'>
                <div className='pt-20 px-4 md:px-12  min-h-screen text-white project-detail-container'>
                    <div className='items-center flex flex-col justify-center gap-4 project-detail-content'>
                        <h1 className=' text-center home-title'>{project.header}</h1>
                        <h2 className='text-left home-subtitle'>{project.sub}</h2>
                        <p className='text-left mb-4 text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed '>
                            {project.sub_content}
                        </p>
                        <h2 className='text-left home-subtitle'>{project.footer}</h2>
                        <ul className='list-disc list-inside text-left mb-4 text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed '>
                            {project.result?.map((item, index) => (
                            <li key={index} className='mb-2'>
                                
                                {item.content}
                            </li>
                            ))}
                        </ul>
                        <button className='button-primary' 
                            onClick={handleClick}>View Project on GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
      
    );
}
export default ProjectDetail;