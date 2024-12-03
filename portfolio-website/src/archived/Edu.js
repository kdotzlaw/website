import React from 'react';
//styles
import '../styles/Edu.css';

const Edu = () => {
    return (
        <div id='body' className="pt-12"> {/* Added padding-right to account for sidebar */}
            <div id='edu-content' className="py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-6xl font-bold text-center">Education</h1>
                    <div className='py-2 card'>
                        <h2 className='py-2 text-xl font-semibold' >Bachelor of Science in Computer Science</h2>
                            <h2 className='text-xl font-semibold'>Specializations</h2>
                            <ul>

                            </ul>
                            <h2 className='text-xl font-semibold'>Courses</h2>
                            <ul>
                                
                            </ul>
                        </div>
                    </div>
            </div>
            <div id='skills-content' className="container mx-auto py-4">
                <div id='edu-container'>
                    
                </div>
            </div>
        </div>
    );
}   

export default Edu;