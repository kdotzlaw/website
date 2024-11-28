import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            category: "Programming Languages",
            skills: ["JavaScript", "Python", "Java", "C++"]
        },
        {
            category: "Web Technologies",
            skills: ["React", "Node.js", "HTML5", "CSS3", "Tailwind CSS"]
        },
        {
            category: "Databases",
            skills: ["MySQL", "MongoDB", "PostgreSQL"]
        },
        {
            category: "Tools & Platforms",
            skills: ["Git", "Docker", "AWS", "Linux"]
        }
    ];

    return (
        <div id='skills-body' className="pr-64">
            <div id='skills-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Skills</h1>
                    <h2 className='py-4 text-center text-xl'>My Technical Expertise</h2>
                </div>
            </div>
            <div id='skills-content' className="container mx-auto py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">{category.category}</h3>
                            <ul className="list-disc list-inside">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="text-lg mb-2">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
