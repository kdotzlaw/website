
import React from 'react';
const Edu = () => {
    return (
        <div id='edu-body' className="pr-64"> {/* Added padding-right to account for sidebar */}
            <div id='edu-header' className="py-16">
                <div className="container mx-auto">
                    <h1 className="text-6xl font-bold text-center">Education</h1>
                    <h2 className='py-4'>Subheading</h2>
                </div>
            </div>
            <div id='edu-content' className="container mx-auto py-4">
                <div id='edu-container'>
                    <h2 className='text-xl'>Education</h2>
                    <p className='py-4'>Education goes here</p>
                </div>
            </div>
        </div>
    );
}   

export default Edu;