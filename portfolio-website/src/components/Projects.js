import React, { useState } from 'react';
import { chevronLeft, chevronRight} from 'lucide-react';

//Image imports
/*import esnImage from '../img/esn.JPG';
import studyBuddyArch from '../img/StudyBuddyArch.png';
import sine1 from '../img/2sine-1step.png';
import sine2 from '../img/2sine-2step.png';
import lorenz1 from '../img/lorenz-1step.png';
import lorenz2 from '../img/lorenz-2step.png';
*/
//Logos
import flaskImg from '../img/flask.png';
import reactImg from '../img/react.png';
import pythonImg from '../img/python.png';
import sqlImg from '../img/sql.png';
import bioImg from '../img/bio.png';
import fStackImg from '../img/fStack.png';
import cyber from '../img/cyber.png';


//Project category tiles, when clicked, the projects in that category will be displayed via carousel
const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currIndex, setCurrIndex] = useState(0);
    //list of kvps
    const categories = [
        {id: 'react', name: 'React', icons:reactImg},
        {id: 'python', name: 'Python', icons:pythonImg},
        {id: 'sql', name: 'SQL', icons:sqlImg},
        {id: 'bio', name: 'Bioinformatics', icons:bioImg},
        {id: 'cyber', name: 'Cyber Security', icons:cyber},
        {id: 'flask', name: 'Flask', icons:flaskImg},
        {id: 'fstack', name: 'Frontend Stack', icons:fStackImg},
        
    ];
    //Project list
    const Projects = [
        {
            types: [ 'python'],
            header:'Analyzing Covid-19 Data to Predict Long Covid-19 Cases',
            images: [
                { src: pythonImg, alt: 'Python Logo' },
                
            ],
            url:'https://github.com/rdotzlaw/COMP4710-Group-11',
            description: 'A group project that analyzed COVID-19 data using Python and data mining techniques. Resulted in 3 publications in IEEE.',
            sub: `Analysis`,
            sub_content:
            `
                Our group used the Apriori algorithm to mine association rules from demographic data and identify rules that have a minimum confidence of 0.3.
                We then preformed demographic-symptom clustering using symptom frequencies and chi-square tests to determine differences between groups.
                Using the Boruta algorithm and descriptive analysis, we identified the most important features for prediction. 
                We created and trained three models, a decision tree model, a random forest model created by Sudre, and a custom random forest model, to predict whether a person has a long covid-19 case.
             `,
            footer:'Results',
            result:[
                {type: 'text', content: 'Demographic analysis showed that individuals who are assigned female at birth, female identifying individuals, white individuals, and individuals who have had at least one vaccination are developing Long Covid-19'},
                {type: 'text', content: 'Identified high confidence association rules that indicate that individuals assigned female at birth develop Long Covid-19'},
                {type: 'text', content: 'Symptom clustering determined that cough, headache and fatigue were the most prevalent symptoms for individuals developing Long Covid-19'},
                {type: 'text', content: 'Descriptive analysis and feature selection indicated that symptom severity was a strong distinguisher'},
                {type: 'text', content: 'Our decision tree had an AUC of 0.706'},
                {type: 'text', content: 'Our custom random forest model had an AUC of 0.721'},
                {type: 'text', content: 'Sudre\'s random forest model had an AUC of 0.76'}
               
            ]
        }
    ];
        
    //get projects in the selected category
    const getProjectsInCategory = (category) => {
        return Projects.filter(project => project.types.includes (category));
    }

    //go to next slide
    const nextSlide = () => {
        setCurrIndex(currIndex + 1);
    }
    //go to previous slide
    const prevSlide = () => {
        setCurrIndex(currIndex - 1);
    }



     return(
        <div id = 'projects' className='pt-12 bg-gunmetal text-white min-h-screen'>
            <div className='py-16'>
                <div className="container mx-auto text-center ">
                    <h1 className='text-6xl font-bold mb-12'>Projects</h1>
                    {/*Project Category Tiles*/}
                    <div id='prokect-tiles' className='grid grid-cols-2 md:grid-cols-4 gap-6 p-6'>
                        {categories.map((category, index)=>(
                            <div key={category.id} onClick={()=>{
                                setSelectedCategory(category.id, index);
                                setCurrIndex(index);
                            }}
                            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id ? 'bg-teal bg-opacity-20' : 'bg-white bg-opacity-10'  }`
                                }
                            >
                                <img 
                                    src = {category.icons}
                                    alt = {category.name}
                                    className="w-16 h-16 mx-auto mb-4 object-contain"
                                />
                             <h3 className="text-xl font-semibold">{category.name}</h3>
                        </div>
                        ))}
                    </div> {/*End Project Tiles*/}
                    {/*Project Carousel*/}
                    {selectedCategory && (
                        <div className='mt-12 relative'>
                            <div className='flex items-center justify-center gap-4'>
                                <button onClick={prevSlide} className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30'><chevronLeft className="w-6 h-6" /></button>
                                <div className="w-full max-w-4xl bg-white bg-opacity-5 rounded-lg p-6">
                                    {getProjectsInCategory(selectedCategory)[currIndex] && (
                                            <div className='flex flex-col md:flex-row gap-8'>
                                                <div className='md:w-1/3'>
                                                    {getProjectsInCategory(selectedCategory)[currIndex].images.map((image, index) => (
                                                        <img 
                                                            key={index}
                                                            src={image.src} 
                                                            alt={image.alt} 
                                                            className="w-full h-auto object-contain rounded mb-4"
                                                        />
                                                    ))}
                                                    {getProjectsInCategory(selectedCategory)[currIndex].url &&(
                                                        <button onClick={() => window.open(getProjectsInCategory(selectedCategory)[currIndex].url)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">View Project</button>
                                                    )}
                                                </div>
                                                <div className='md:w-2/3'>
                                                    <h2 className='text-2xl font-bold mb-4'>{getProjectsInCategory(selectedCategory)[currIndex].header}</h2>
                                                    <p className='mb-4'>{getProjectsInCategory(selectedCategory)[currIndex].description}</p>
                                                    {getProjectsInCategory(selectedCategory)[currIndex].sub && (
                                                        <>
                                                            <h3 className="text-xl font-semibold mb-2">{getProjectsInCategory(selectedCategory)[currIndex].sub}</h3>
                                                            <p className="mb-4">{getProjectsInCategory(selectedCategory)[currIndex].sub_content}</p>
                                                        </>
                                                    )}
                                                    {getProjectsInCategory(selectedCategory)[currIndex].footer && (
                                                        <div className='md-4'>
                                                            <h3 className='text-xl font-semibold mb-2'>{getProjectsInCategory(selectedCategory)[currIndex].footer}</h3>
                                                            <ul className='list-disc list-inside'>
                                                                {getProjectsInCategory(selectedCategory)[currIndex].result?.map((item, index) => {
                                                                    item.type === 'text' && <li key={index} className="text-left">{item.content}</li>
                                                                    {item.type === 'image-group' && (
                                                                        <div key={index} className="flex flex-row space-x-4">
                                                                            {item.images.map((img, imgIndex) => (
                                                                                <div key={imgIndex} className="flex flex-col items-center w-1/2">
                                                                                    <img src={img.src} alt={img.alt} className="w-full h-auto object-contain rounded hover:scale-105 transition-transform duration-300" />
                                                                                    {img.descriptor && <p className="mt-2 text-sm text-gray-600">{img.descriptor}</p>}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}  
                                                                })}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                    ) }
                                </div> {/*End Carousel Content*/}
                                <button onClick={nextSlide} className='p-2 rounded-full bg-teal bg-opacity-20 hover:bg-opacity-30'><chevronRight className="w-6 h-6" /></button>
                            </div> 
                        </div>
                    )}
                </div>
            </div>
        </div>
     );  
};
    export default Projects;