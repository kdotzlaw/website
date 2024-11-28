import React, { useState } from 'react';

const Skills = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

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

    const openModal = (skill) => {
        setSelectedSkill(skill);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSkill(null);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">{category.category}</h2>
                        <ul>
                            {category.skills.map((skill, skillIndex) => (
                                <li 
                                    key={skillIndex} 
                                    className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
                                    onClick={() => openModal(skill)}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">{selectedSkill}</h2>
                        <p className="mb-4">Here you can add more details about {selectedSkill}.</p>
                        <button 
                            onClick={closeModal}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
