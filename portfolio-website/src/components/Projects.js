
import React from 'react';
const Projects = () => {
    return (
        <div id='projects-body' className="pr-64"> {/* Added padding-right to account for sidebar */}
            <div id='projects-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Projects</h1>
                    <h2 className='py-4'>Subheading</h2>
                </div>
            </div>
            <div id='projects-content' className="container mx-auto py-4">
                <div id='bio-container'>
                    <h2 className='text-xl'>About Me</h2>
                    <p className='py-4'>Bio goes here</p>
                </div>
                <div id='curr-proj-container'>
                    <h2 className='text-xl'>Current Projects</h2>
                    <p className='py-4'>Projects go here</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;