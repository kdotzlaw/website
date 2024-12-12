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
        <div id='projects' className='min-h-screen pt-16 sm:pt-20 px-4 sm:px-8 lg:px-12 text-white'>
            <div className='container mx-auto px-4 sm:px-8 lg:px-12'>
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 text-center mt-8 sm:mt-16'>Skills & Technologies</h1>
                    <div className={`w-full transition-all duration-300 ${
                        selectedCategory ? 'min-h-[2000px]' : 'min-h-[800px] sm:min-h-[1000px] lg:min-h-[1280px]'
                    }`}>
                        <div className="max-w-5xl mx-auto rounded-lg p-4 sm:p-6">
                            <div id='project-tiles' className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 project-tile'>
                                {categories.map((category) => (
                                    <div 
                                        key={category.id} 
                                        onClick={() => {
                                            setSelectedCategory(prevCategory => 
                                                prevCategory === category.id ? null : category.id
                                            );
                                            setCurrIndex(0);
                                        }}
                                        className={`p-3 sm:p-4 lg:p-6 rounded-lg cursor-pointer flex flex-col items-center justify-center 
                                            transition-all duration-300 transform hover:scale-105 
                                            ${selectedCategory === category.id ? 'bg-teal bg-opacity-20' : 'bg-white bg-opacity-10'}`
                                        }
                                    >
                                        <img 
                                            src={category.icons}
                                            alt={category.name}
                                            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 object-contain"
                                        />
                                        <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-center">
                                            {category.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    
                        <div className='flex items-center justify-center gap-4 mt-8 w-full'> 
                            {selectedCategory && (
                                <div className='flex items-center justify-center gap-4 mt-8 w-full max-w-5xl'> 
                                    <button 
                                        onClick={prevSlide} 
                                        className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-nav hidden sm:block'
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <div className='flex-1 max-w-4xl'>
                                        <ProjectCarousel project={getProjectsInCategory(selectedCategory)[currIndex]} />
                                    </div>
                                    <button 
                                        onClick={nextSlide} 
                                        className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-nav hidden sm:block'
                                    >
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