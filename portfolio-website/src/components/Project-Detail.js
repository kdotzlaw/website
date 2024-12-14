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
    // function to id and render sub content types
      const renderSubContent =(item, index) =>{
        //if result type is text
        if(item.type === 'text'){
            return <p key={index} className='mb-2'>{item.content}</p>
        }
        //if result type is text-sub
        else if(item.type === 'text-sub'){
            return <p key={index} className='mb-2 text-sm text-gray-300'>{item.content}</p>
        }
        //if result type is image-group
        else if (item.type === 'image-group'){
            return (
                <div key={index} className='flex justify-center w-full mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full'>
                    {item.images.map((image, imgIndex) => (
                        <div key={imgIndex} className='flex flex-col items-center'>
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className='max-w-full h-auto rounded-lg'
                            />
                            {image.descriptor && (
                                <p className='mt-2 text-sm text-center text-gray-300'>
                                    {image.descriptor}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            );
        }        //if type is a list return list items with bullet points
        else if(item.type==='list'){
            return (
                <li key={index} className='mb-4'>
                    <ul className='list-disc list-inside pl-4 space-y-2 text-left justify-center'>
                        {item.content.map((listItem, listIndex) => (
                            listItem.type === 'text' && (
                                <li key={listIndex} className='text-gray-300'>
                                    {listItem.content}
                                </li>
                            )
                        ))}
                    </ul>
                </li>
            );
        }
        return null;
      };


      //function to id and render different result types
      const renderResult =(item, index) =>{
        //if result type is text
        if(item.type === 'text'){
            return <li key={index} className='mb-2'>{item.content}</li>
        }
        //if result type is text-sub
        else if(item.type === 'text-sub'){
            return <p key={index} className='mb-2 text-sm text-gray-300'>{item.content}</p>
        }
        //if result type is image-group
        else if (item.type === 'image-group'){
            return (
                <div key={index} className='flex justify-start items-start w-full my-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        {item.images.map((image, imgIndex) => (
                            <div key={imgIndex} className='flex flex-col items-start'>
                                <div className='w-full'>
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className='w-full h-auto rounded-lg'
                                    />
                                </div>
                                {image.descriptor && (
                                    <p className='mt-2 text-sm text-gray-300 text-center'>
                                        {image.descriptor}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        //if type is a list return list items with bullet points
        else if(item.type==='list'){
            return (
                <li key={index} className='mb-4'>
                    <ul className='list-disc list-inside pl-4 space-y-2 text-center'>
                        {item.content.map((listItem, listIndex) => (
                            listItem.type === 'text' && (
                                <li key={listIndex} className='text-gray-300'>
                                    {listItem.content}
                                </li>
                            )
                        ))}
                    </ul>
                </li>
            );
        }
        return null;
      };

    return(
        <div id='project-detail' className='min-h-screen pt-16 pb-16 sm:pt-20 px-4 sm:px-8 lg:px-12 text-white flex justify-center items-start'>
              <div className='container mx-auto w-3/4'>
                <div className='pt-20 px-4 md:px-12  min-h-screen text-white project-detail-container'>
                    <div className='items-center flex flex-col justify-center gap-4 project-detail-content'>
                        <h1 className=' text-center home-title'>{project.header}</h1>
                        <h2 className='text-left home-subtitle'>{project.sub}</h2>
                        <div className='flex flex-col text-center mb-4 text-lg md:text-base text-gray-300 max-w-2xl w-full leading-relaxed'>
                            {Array.isArray(project.sub_content) 
                                ? project.sub_content.map((item, index) => renderSubContent(item, index))
                                : <p>{project.sub_content}</p>
                            }
                        </div>
                        <h2 className='text-center home-subtitle'>{project.footer}</h2>
                        <ul className='text-center mb-4 text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed'>
                            {project.result?.map((item, index) => renderResult(item, index))}
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