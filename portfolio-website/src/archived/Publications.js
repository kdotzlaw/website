import React, { useState } from 'react';
const Publications = () => {
//toggles
    const [p1Expanded, setP1Expanded] = useState(false);
    const [p2Expanded, setP2Expanded] = useState(false);
    const [p3Expanded, setP3Expanded] = useState(false);
    const toggleP1 = () => {
        setP1Expanded(!p1Expanded);
    };
    const toggleP2 = () => {
        setP2Expanded(!p2Expanded);
    };
    const toggleP3 = () => {
        setP3Expanded(!p3Expanded);
    };

    return (
        <div id='body' className="pr-64"> {/* Added padding-right to account for sidebar */}
            <div id='publications-header' className="py-16">
                <div className="container mx-auto text-left text-pretty max-w-3xl" >
                    <h1 className="text-6xl font-bold ">Publications</h1>
                    <h2 className='py-4'>Subheading</h2>
                </div>
            </div>
            <div id='publications-content' className="container mx-auto text-left max-w-3xl">
                <h2 className='py-4 font-bold cursor-pointer flex items-center'onClick={toggleP1}>
                    Title
                    <span className={`ml-2 transform ${p1Expanded ? 'rotate-180' : ''} transition-transform duration-200`}>▼</span>
                </h2>
                {p1Expanded && (
                    <article className='text-pretty'>
                        <p className='py-2 text-wrap'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </article>
                )}
            </div>
        </div>
    );
}

export default Publications;