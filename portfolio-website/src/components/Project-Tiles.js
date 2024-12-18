import React, { useState } from 'react';

//component imports

//Project is a list of projects
import { categories, projects } from './Projects';
import CategoryModal from './Category-Modal';
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
        <div id='projects' className='min-h-screen pt-16 pb-16 sm:pt-20 px-4 sm:px-8 lg:px-12 text-white flex justify-center items-start'>
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

                
                    <div className="min-h-[90vh] w-[90vw] max-w-[1280px] mx-auto flex flex-col items-center">
                        <div className="max-w-5xl mx-auto rounded-lg p-4 sm:p-6">
                            <div id='project-tiles' className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 project-tile'>
                                {categories.map((category) => (
                                    <div 
                                        id='category-tiles'
                                        key={category.id} 
                                        onClick={() => {
                                            setSelectedCategory(prevCategory => 
                                                prevCategory === category.id ? null : category.id
                                            );
                                            setCurrIndex(0);
                                        }}
                                        className={`relative p-3 sm:p-4 lg:p-6 rounded-lg cursor-pointer
                                            transition-all duration-300 transform hover:scale-105 
                                            ${selectedCategory === category.id ? 'bg-teal bg-opacity-20' : 'bg-white bg-opacity-10'}`
                                        }
                                    >
                                         <div className="absolute top-2 left-2">
                                                <img 
                                                    src={category.icons}
                                                    alt={category.name}
                                                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                                                />
                                            </div>
                                            <div className="mt-8 text-center">
                                                <h3 className="text-sm sm:text-base font-semibold mb-2">
                                                    {category.name}
                                                </h3>
                                                {category.years && (
                                                    <p className="text-xs sm:text-sm text-gray-300">
                                                        {category.years} {category.years === 1 ? 'year' : 'years'} experience
                                                    </p>
                                                )}
                                            </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    
                        {/*<div className='flex items-center justify-center gap-4 mt-8 w-full'>*/} 
                            {selectedCategory && (
                                 <CategoryModal 
                                        category={categories.find(cat => cat.id === selectedCategory)}
                                        projects={projects}
                                        onClose={() => setSelectedCategory(null)}
                               />
                              
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
    export default Project_Tiles;