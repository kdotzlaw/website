import React, { useState } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
//component imports
import  ProjectCarousel from './Project-Carousel';
//Project is a list of projects
import { categories, projects } from './Projects';

//style imports
//import '../styles/Projects.css';
import '../styles/main.css';


//Project category tiles, when clicked, the projects in that category will be displayed via carousel
const Project_Tiles = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currIndex, setCurrIndex] = useState(0);
   
    


    //get projects in the selected category
    const getProjectsInCategory = (category) => {
        return projects.filter(project => project.types.includes (category));
    }

    //go to next slide
    const nextSlide = () => {
        // carousel is cyclic, so if the next index is greater than the length of the array, set it to 0
        const projectsInCategory = getProjectsInCategory(selectedCategory);
        setCurrIndex((prevIndex)=>
            prevIndex >= projectsInCategory.length - 1 ? 0 : prevIndex + 1
            );
    }
    //go to previous slide
    const prevSlide = () => {
        const projectsInCategory = getProjectsInCategory(selectedCategory);
        setCurrIndex((prevIndex)=>
            prevIndex <= 0 ? projectsInCategory.length - 1 : prevIndex - 1
            );
    }



     return(
        <div id = 'projects' className='pt-12 px-12  text-white'>
            <div className='container mx-auto px-12 py-16'>
                <div className="max-w-6xl mx-auto flex flex-col items-center ">
                    <h1 className='text-6xl font-bold mb-12 text-center'>Skills & Technologies</h1>
                    {/*Project Category Tiles   <div className="h-[1280px] w-[1280px] mx-auto ">*/}
                    <div className={`h-[1280px] w-[1280px] mx-auto flex flex-col items-center justify-start transition-all duration-300 ${
                    selectedCategory ? 'h-[2000px]' : 'h-[1280px]'
                }`}>
                        <div className="max-w-5xl mx-auto  rounded-lg p-6">
                            <div id='project-tiles' className='grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 project-tile'>
                                {categories.map((category)=>(
                                    <div key={category.id} onClick={()=>{
                                        setSelectedCategory(prevCategory => prevCategory === category.id ? null : category.id);
                                        setCurrIndex(0);
                                        /*setSelectedCategory(category.id);
                                        setCurrIndex(0);*/
                                    }}
                                
                                    className={` p-6 rounded-lg cursor-pointer flex flex-col items-center justify-center 
                                        transition-all duration-300 transform hover:scale-105 
                                        ${selectedCategory === category.id ? 'bg-teal bg-opacity-20' : 'bg-white bg-opacity-10'  } `
                                        }
                                    >
                                        <img 
                                            src = {category.icons}
                                            alt = {category.name}
                                            className="w-12 h-12 mx-auto mb-2 object-contain"
                                        />
                                    <h3 className="text-sm font-semibold text-center">{category.name}</h3>
                                </div>
                                ))}
                            </div> {/*End Project Tiles*/}
                        </div>
                    
                    
                    {/*Project Carousel
                    {selectedCategory && (
                        <div className='mt-12 relative'>
                            <div className='flex items-center justify-center gap-4'>
                                <button onClick={prevSlide} className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-button'><ChevronLeft className="w-6 h-6" /></button>
                                <div className="w-full max-w-4xl bg-white bg-opacity-5 rounded-lg p-6">
                                    {getProjectsInCategory(selectedCategory)[currIndex] && (
                                            <div className='flex flex-col md:flex-row gap-8'>
                                                <div className='md:w-1/3'>
                                                    {getProjectsInCategory(selectedCategory)[currIndex].images.map((image, index) => (
                                                        <img 
                                                            key={index}
                                                            src={image.src} 
                                                            alt={image.alt} 
                                                            className="w-full h-auto object-contain rounded mb-4"
                                                        />
                                                    ))}
                                                    {getProjectsInCategory(selectedCategory)[currIndex].url &&(
                                                        <button onClick={() => window.open(getProjectsInCategory(selectedCategory)[currIndex].url)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">View Project</button>
                                                    )}
                                                </div>
                                                <div className='md:w-2/3'>
                                                    <h2 className='text-2xl font-bold mb-4'>{getProjectsInCategory(selectedCategory)[currIndex].header}</h2>
                                                    <p className='mb-4'>{getProjectsInCategory(selectedCategory)[currIndex].description}</p>
                                                    {getProjectsInCategory(selectedCategory)[currIndex].sub && (
                                                        <>
                                                            <h3 className="text-xl font-semibold mb-2">{getProjectsInCategory(selectedCategory)[currIndex].sub}</h3>
                                                            <p className="mb-4">{getProjectsInCategory(selectedCategory)[currIndex].sub_content}</p>
                                                        </>
                                                    )}
                                                    {getProjectsInCategory(selectedCategory)[currIndex].footer && (
                                                        <div className='md-4'>
                                                            <h3 className='text-xl font-semibold mb-2'>{getProjectsInCategory(selectedCategory)[currIndex].footer}</h3>
                                                            <ul className='list-disc list-inside'>
                                                                {getProjectsInCategory(selectedCategory[currIndex].result?.map((item, index)=>(
                                                                    item.type === 'text' ? <li key={index} className='text-wrap'>{item.content}</li> : item.type === 'image-group' ? (
                                                                        <div key={index} className='flex flex-row space-x-4'>
                                                                            {item.images.map((img, imgIndex) => (
                                                                                <div key={imgIndex} className='flex flex-col items-center w-1/2'>
                                                                                    <img src={img.src} alt={img.alt} className='w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300' />
                                                                                    {img.descriptor && <p className='mt-2 text-sm text-gray-600'>{img.descriptor}</p>}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    ) : (
                                                                        <div key={index} className='flex flex-col items-center'>
                                                                            <img src={item.src} alt={item.alt} className='w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300' />
                                                                            {item.descriptor && <p className='mt-2 text-sm text-gray-600'>{item.descriptor}</p>}
                                                                        </div>
                                                                    )
                                                                )))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                    ) }
                                </div> {/*End Carousel Content
                                <button onClick={nextSlide} className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-button'><ChevronRight className="w-6 h-6" /></button>
                            </div> 
                        </div>
                    )}*/}
            
                <div className='flex items-center justify-center gap-4 mt-8  w-full'> 
                    {selectedCategory && (
                         <div className='flex items-center justify-center gap-4 mt-8 w-full max-w-5xl '> 
                            <button onClick={prevSlide} className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-button carousel-nav'>
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <div className='flex-1 max-w-4xl'>
                                <ProjectCarousel project={getProjectsInCategory(selectedCategory)[currIndex]} />
                            </div>
                            <button onClick={nextSlide} className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-button carousel-nav'>
                                <ChevronRight className="w-6 h-6" />
                            </button>
                     </div>
                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );  
};
    export default Project_Tiles;