import React from 'react';


const ProjectCarousel = ({ project }) => {
    if (!project) {
        return ;
      }
    return (
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
          {project.url && (
            <button 
              onClick={() => window.open(project.url)} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-auto"
            >
              View Project
            </button>
          )}
        </div>
        <div className='md:w-2/3 overflow-y-auto'>
          <h2 className='text-2xl font-bold mb-4'>{project.header}</h2>
          <p className='mb-4'>{project.description}</p>
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
      </div>

    );
};

export default ProjectCarousel;