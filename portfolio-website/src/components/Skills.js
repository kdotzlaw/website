import React from 'react';

const Skills = () => {
    return (
        <div id='skills-body' className="pr-64">
            <div id='skills-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Skills</h1>
                    <h2 className='py-4'>My Technical Expertise</h2>
                </div>
            </div>
            <div id='skills-content' className="container mx-auto py-4">
                {/* Add your skills content here */}
                <p>This is where you can list your technical skills and proficiencies.</p>
            </div>
        </div>
    );
};

export default Skills;
