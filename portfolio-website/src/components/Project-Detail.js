import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories, projects }  from './Projects';
import ImageModal from './Img-Modal';
import '../styles/main.css';
//A seperate page with project details added dynamically based on id
const ProjectDetail = ({projects}) => {
    //track details by project id
    const { projectId } = useParams();
    const project = projects?.find(p => p.id === parseInt(projectId));
    const [selectedImage, setSelectedImage] = useState(null);

    if (!project) return <div className="pt-20 text-center text-white">Project not found</div>;

    const handleClick = () => {
        window.open(project.url, "_blank");
      };
    
    //function to handle the hover effect on images
    const ImageWithHover = ({ image, onClick }) => (
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src={image.src} 
            alt={image.alt} 
            className="w-full h-auto rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:brightness-90 cursor-pointer"
            onClick={onClick}
          />
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 pointer-events-none" />
          {image.descriptor && (
            <p className="mt-2 text-sm text-gray-300 text-center transition-opacity duration-300 group-hover:text-white">
              {image.descriptor}
            </p>
          )}
        </div>
      );

    //render image group with checks for single or multiple images
    const renderImageGroup = (item, index) => {
        if (item.images.length === 1) {
          return (
            <div key={index} className="w-full flex flex-col items-center justify-center my-4">
              <div className="w-full flex justify-center">
                <div className="max-w-2xl w-full">
                  <ImageWithHover 
                    image={item.images[0]} 
                    onClick={() => setSelectedImage(item.images[0])}
                  />
                </div>
              </div>
            </div>
          );
        }
    
        return (
          <div key={index} className="flex justify-start items-start w-full my-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.images.map((image, imgIndex) => (
                <div key={imgIndex} className="flex flex-col items-start">
                  <ImageWithHover 
                    image={image}
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      };

    // function to id and render sub content types
      const renderSubContent =(item, index) =>{
        //if result type is text
        if(item.type === 'text'){
            return <p key={index} className='mb-2'>{item.content}</p>
        }
        else if(item.type === 'text-header'){
            return <h2 key={index} className='text-center text-2xl font-bold mb-4'>{item.content}</h2>
        }else if(item.type === 'text-footer'){
            return <p key={index} className='text-center text-2xl font-bold mb-4'>{item.content}</p>   
        }
        //if result type is text-sub
        else if(item.type === 'text-sub'){
            return <p key={index} className='mb-2 text-sm text-gray-300'>{item.content}</p>
        }
       
         //if result type is image-group
         else if (item.type === 'image-group'){
           return renderImageGroup(item, index);
        }        //if type is a list return list items with bullet points
        else if(item.type==='list-center'){
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
        } else if(item.type==='list-left'){
            return (
                <li key={index} className='mb-4'>
                    <ul className='list-disc list-inside pl-4 space-y-2 text-left justify-left'>
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
        else if(item.type === 'text-header'){
            return <h2 key={index} className='text-center text-2xl font-bold mb-4'>{item.content}</h2>
        }
        //if result type is text-sub
        else if(item.type === 'text-sub'){
            return <p key={index} className='mb-2 text-sm text-bold text-gray-300'>{item.content}</p>
        }else if(item.type === 'text-footer'){
            return <p key={index} className='text-center text-2xl font-bold mb-4'>{item.content}</p>   
        }
        //if result type is image-group
         //if result type is image-group
         else if (item.type === 'image-group'){
          return renderImageGroup(item, index);
          
        } else if(item.type === 'text-break'){
            return <br key={index} className='text-center text-2xl font-bold mb-4'/>    
        }
        else if(item.type === 'text-pub'){
            return (
                <div key={index} className='mb-4'>
                    <ul className='space-y-4'>
                        {item.content.map((pubItem, pubIndex) => (
                            <li key={pubIndex} className='text-sm text-gray-300 italic'>
                                {pubItem.content}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
        //if type is a list return list items with bullet points
        else if(item.type==='list-center'){
            return (
                <li key={index} className='mb-4'>
                    <ul className='list-disc list-inside pl-4 space-y-2 text-center justify-center'>
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
        } else if(item.type==='list-left'){
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

    return(
        <>
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
        {selectedImage && (
            <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
        </>  
        
      
    );
}
export default ProjectDetail;