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
            {/*<div className='container mx-auto px-4 sm:px-8 lg:px-12'>
                <div className="max-w-6xl mx-auto flex flex-col items-center about-projects-container">*/}
                 <div className='container mx-auto w-3/4'>
                 <div className="about-projects-container flex flex-col items-center">
                    <div className='about-section text-center '>
                         {/*Detailed About Me*/}
                        <h1 className="text-2xl md:text-2xl font-medium mb-6  home-subtitle">About Me</h1>
                            <p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed ">
                                I am a skilled backend developer and data analyst specializing in Python, JavaScript, database management systems (DBMS), and various query languages.
                                I strive to create secure, efficient, scalable, and maintainable software creating easily understood technical documentation, using test-driven development (TDD), using cyber security principles, and by following the software development life cycle (SDLC).
                                
                            </p>
                            <br/>
                            <p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed ">
                            My technical background is primarily in the areas of software engineering, artificial intelligence, and database management systems (DBMS), though I have dabbled in web development.
                            My passion projects are in the areas of data science, machine learning, and artificial intelligence, investigating how to use these technologies to further medical research and diagnosis.
                            </p>
                    </div>
                  <div className='skills-section py-6'>
                    <h3 className="text-5xl md:text-4xl font-bold mb-4  text-transparent bg-clip-text home-subtitle">Skills & Projects</h3>
                  </div>
                    {/*Project Tiles */}
                    <div  className="flex justify-center items-center w-full">

                
                    <div className="h-[90vh] w-[90vw] max-w-[1280px] mx-auto ">
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
                    
                        {/*<div className='flex items-center justify-center gap-4 mt-8 w-full'>*/} 
                            {selectedCategory && (
                                <div className='flex items-center justify-center gap-4 mt-8 w-full max-w-5xl'> 
                                    <button 
                                        onClick={prevSlide} 
                                      className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-nav'
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <div className='flex-1 max-w-4xl'>
                                        <ProjectCarousel project={getProjectsInCategory(selectedCategory)[currIndex]} />
                                    </div>
                                    <button 
                                        onClick={nextSlide} 
                                        className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30 carousel-nav'
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