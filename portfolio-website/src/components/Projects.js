import React, { useState } from 'react';
import { chevronLeft, chevronRight} from 'lucide-react';

//Image imports
import esnImage from '../img/esn.JPG';
import studyBuddyArch from '../img/StudyBuddyArch.png';
import sine1 from '../img/2sine-1step.png';
import sine2 from '../img/2sine-2step.png';
import lorenz1 from '../img/lorenz-1step.png';
import lorenz2 from '../img/lorenz-2step.png';
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
        return Projects.filter(project => project.types === category);
    }

    //go to next slide

    //go to previous slide




     return(
        <div></div>
     );  
};
    export default Projects;