 import sb from '../img/study-buddy.png';


//Logos
import flaskImg from '../img/flask.png';
import reactImg from '../img/react.png';
import pythonImg from '../img/python.png';
import sqlImg from '../img/sql.png';
import bioImg from '../img/bio.png';
import fStackImg from '../img/fStack.png';
//Images
import cyber from '../img/cyber.png';
import sine1 from '../img/2sine-1step.png';
import sine2 from '../img/2sine-2step.png';
import lorenz1 from '../img/lorenz-1step.png';
import lorenz2 from '../img/lorenz-2step.png';
import peace from '../img/peace.png';
import esnImage from '../img/esn.JPG';



 //list of kvps
 export const categories = [
    {id: 'react', name: 'React', icons:reactImg},
    {id: 'python', name: 'Python', icons:pythonImg},
    {id: 'sql', name: 'SQL', icons:sqlImg},
    {id: 'bio', name: 'BioInformatics', icons:bioImg},
    {id: 'cyber', name: 'Cyber Security', icons:cyber},
    {id: 'flask', name: 'Flask', icons:flaskImg},
    {id: 'fstack', name: 'Frontend Stack', icons:fStackImg},
    {id:'machine-learning', name: 'Machine Learning', icons:esnImage},
    
];
//Project list
export const projects = [
    {
        id:1,
        types: [ 'python'],
        header:'Analyzing Covid-19 Data to Predict Long Covid-19 Cases',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
            
        ],
        url:'https://github.com/rdotzlaw/COMP4710-Group-11/tree/final',
        detail_url:'',
        description: 'A group project that analyzed COVID-19 data using Python and data mining techniques.',
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
           
        ],
        summary:[
            {type: 'text', content: '3 publications in IEEE'},
            {type: 'text', content: 'High confidence rules indicating that individuals assigned female at birth develop Long Covid-19'},
            {type: 'text', content: 'Cough, headache, and fatigue were the most prevalent symptoms for individuals developing Long Covid-19'},
            {type: 'text', content: 'Decision tree AUC was 0.706'},
            {type: 'text', content: 'Custom Random forest AUC was 0.721'},
            {type: 'text', content: 'Sudre\'s random forest AUC was 0.76'}
        ]
    },
    {
        id:2,
        types: ['python', 'machine-learning'],
        header:'Echo State Network',
        images: [
            { src: esnImage, alt: 'Echo State Network' },
          
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ESN-MachineLearning/ESN.ipynb',
        description: 'A custom Python implementation of an Echo State Network used to recognize temporal patterns like k-step ahead forecasting in 2 different datasets',
        sub: `Process`,
        sub_content:
        `
            Used batch training and a sigmoid to train the ESN on the two datasets. Cross-validation was sed to optimize hyperparameters and model error was calculated 
            using mean-square error (MSE). K-step ahead forecasting is used in both validation and testing stages to evaluate hyperparameters (k=1) and calculate model predictions (k>1)
         `,
        footer:'Results',
        result:[
            { type: 'text', content: `2Sine Timeseries` },
            {type: 'list', content:
                [
                  {type: 'text', content: ` ` },
                  {},
                ]
              },
            { 
                type: 'image-group', 
                images: [
                    { src: sine1, alt: '2Sine 1-step ahead forecasting', descriptor: '1-step ahead forecasting with a MSE of 0.142' },
                    { src: sine2, alt: '2Sine 2-step ahead forecasting', descriptor: '2-step ahead forecasting with a MSE of 1.24' }
                ]
            },
           
            { type: 'text', content: `Lorenz Timeseries ` },
            {type: 'list', content:
                [
                  {type: 'text', content: ` ` },
                  {},
                ]
              },
            {
                type:'image-group',
                images: [
                    { src: lorenz1, alt: 'Lorenz 1-step ahead forecasting', descriptor: '1-step ahead forecasting with a MSE of 7.63' },
                    { src: lorenz2, alt: 'Lorenz 2-step ahead forecasting', descriptor: '2-step ahead forecasting with a MSE of 111.61' }
                ]
                
            }
      
          
        ]
    },
    {
        id:3,
        types:['python'],
        header:'Distributed Blockchain',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
            
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/Blockchain',
        description: 
        `A distributed computing  project that connected to an external network and communicated with other peers to perform tasks such as sending and receiving messages, and determining 
        the validity and size of the network blockchain.
        `
    },
    {
        id:4,
        types:[ 'bio','python'],
        header:'Hidden Markov Models',
        images: [
            {src:bioImg, alt: 'BioInformatics Logo'},
            
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Hidden_Markov_Models',
        description: 
            `
                A stochastic model that has the Markov property, which means that the probability of going to the next state depends only on the current state, and has hidden states. 
            `,
        sub: `Process`,
        sub_content:
            `
                Using a set of abstract states, an alphabet of output tokens, a tansition probability matrix, and an emission probability matrix,
                 the HMM calculates the total probability that the given sequence is generated by the model using an implementation of the Forward algorithm and the creation of dynamic programming tables.
            `,
        footer:'',
        result:[
           
        ]
    },
    {
        id:5,
        types:[ 'bio','python'],
        header:'A Custom Implementation of ClustalW ' ,
        images: [
            { src: bioImg, alt: 'BioInformatics Logo' },
            
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Multiple_Sequence_Alignment',
        description:
         `
            A custom implementation of ClustalW that uses a dynamic programming table to align multiple sequences based on their sum of pairs scores. 
            This implementation identifies a single optimal alignment by tracing back through the dynamic programming table.
        `

    },
    {
        id:6,
        types:[ 'bio','python'],
        header:'Neighbour Joining with Python',
        images: [
            { src: bioImg, alt: 'BioInformatics Logo' },
            
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Neighbour_Joining',
        description: 
            `
                An implementation of the Neighbour Joining algorithm that uses distances between sequences and recursion (or the Fitch-Margoliash algorithm in the base case) to determine the optimal paths used to build thetree.
            `,
        footer:'Process',
        result:[
           { type: 'text', content: 'Preprocess a distal matrix to get a list of taxa and their distances as a key-value pair: {(taxa1, taxa2): distance}' },
           { type: 'text', content: 'Create a UTable using unions of the distance for each taxon' },
           { type: 'text', content: 'Create a delta matrix using UTable values, distances for each taxa pair, and the number of taxa' },
           { type: 'text', content: 'Recursively perform Neighbour Joining by pulling away taxa pairs with minimum distances and forming a cherry with their parent' },
           { type: 'text', content: 'Returns the optimal paths that would be used to build the tree' }
        ]
    },
    {
        id:7,
        types:[ 'bio','python'],
        header:'Comparing Brute Force and Knuth-Morris-Pratt Pattern Matching Algorithms on the Sorangium Cellulosum Genome',
        images: [
            {src:bioImg, alt: 'BioInformatics Logo'},
            
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/BioInformatics/Pattern_Matching',
        description:
         `
            An individual project that compared the performance of the brute force and Knuth-Morris-Pratt pattern matching algorithms on the Sorangium Cellulosum genome using Python and BioPython.
            In addition to comparing the algorithms, I identified a pattern that runs significantly faster with KMP and found a pattern that codes for amino acids.
        `,
        sub: `Process`,
        sub_content:
        `
            The Brute Force implementation compares the given sequence to a given pattern at all  possible starting positions and returns both the total number of matches and the time taken.
            The KMP implementation uses a dynamic programming table and pointers for the indexes of the sequence and pattern. 
            When the characters at both pointer positions match, both pointers move forward. Otherwise, the pattern pointer is
            reset to the last value in the table.
        `,
        footer:'Results',
        result:[
            {type: 'text', content: `In the worst case, KMP can match the pattern in O(n) time (as KMP never rechecks previously matched characters), whereas the brute force algorithm can match the pattern in O(n^2) time
            (if there is a mismatch in the last spot of the pattern).`},
           {type: 'text', content: `The pattern  CCCC runs significantly faster with the Knuth-Morris-Pratt algorithm (20.45s vs 30.11s), likely because the genome has a 71% GC content and the pattern is highly repetitive.`},
           {type: 'text', content: `The pattern AACGTT returns an even 400 matches, unique from other patterns tested, indicating that the pattern is a coding sequence for a pair of amino acids.`}
        ]

    },
    {
        id:8,
        types: ['sql'],
        header:'Query Optimization',
        images: [
            { src: sqlImg, alt: 'SQL Logo' }
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/QueryOptimization.pdf',
        description: 'A research project that compared non-optimized SQLite queries to queries optimized with B+ indexes on a dataset of 18 columns and >29,000,000 rows',
        sub: `Analysis`,
        sub_content:
        `
          Using a dataset of parking violations from the Department of Finance, we created a SQLite database which had 12,862,344 pages, with each page being 4096 bytes.
          We performed a preliminary investigation to determine how SQLite would create indexes for a given query.
          We then compared the performance of the non-optimized query to queries optimized with non-clustered B+ tree indexes.
          Additionally, we compared the usage of pages and bytes for the optimized query and the non-optimized query.
        `,
        footer:'Results',
        result:[
            {type: 'text', content: `Non-clustered B+ tree indexes significantly improved runtimes`},
            {type: 'text', content: `In most cases, indexes on multiple columns performed significantly better than indexes on a single column`},
            {type: 'text', content: `There is a higher percentage of unused bytes for unoptimized queries than for optimized queries`},
            {type: 'text', content: `No overflow pages are used for queries optimized with  B+ tree indexes`}

        ]
    },
    {
        id:9,
        types:['sql','python'],
        header:'',
        images: [
            { src: sb, alt: 'Study Buddy', id: 'sb' }
        ],
        url:'https://github.com/kdotzlaw/StudyBuddy',
        description: `I worked as a database engineer and technical writer for a fullstack web application designed to help students manage their study schedules. I built
                the backend using MSSQL and Python, and created database integration tests using Python unittest. All database queries used prepared statements and
                parameterized queries to prevent SQL injection attacks. I collaborated with our Server Manager to ensure that the database successfully integrated with the Flask server.
                I also worked with our CI/CD lead to ensure that the backend was successfully deployed with GitHub Actions and Docker.
                As a technical writer, I created project documentation including a wiki, milestone reports, test plans, and meeting minutes. 
                I also performed load testing with Locust to ensure that the application could handle high traffic and concurrent requests.`,
        footer:'',
        result:[
            {type: 'text', content: 'I was responsible for the backend of the application, including database integration, prepared statements, and parameterized queries'},
        ]
        
    },
    {
        id:10,
        types: [ 'fstack'],
        header:'peacelc.com',
        images: [
            { src: peace, alt: 'Peace Lutheran Church Website' },
           
        ],
        url: 'https://peacelc.com',
        description: 'A user-friendly and organization-focused website built with Wordpress and custom HTML/CSS',
        footer:'Key Contributions',
        result: [
            {type:'text', content:'An archive of Church Messages that is searchable by keywords and is linked to a recent Message display on the home page'}, 
            {type:'text', content:'An event management system that dynamically updates when events are added or when events have passed '},   
            {type:'text', content:'Custom CSS to personalize the site to match Church branding'},
            {type:'text', content:'Client support including creating technical documentation for client site management, debugging technical issues, and site migration between hosting services'},

            { type: 'image-group', images: [
               
                
            ]}
        ]
    },
    {
        id:11,
        types: ['react','flask','python'],
        header:'Peace Lutheran Church Database Administrator',
        images: [
            { src: peace, alt: 'Peace Lutheran Church Website' },
           
        ],
        
        description: 'A custom React app that allows the administrator to manage the church\'s database and volunteer management (ongoing)',
        footer:'Key Features',
        result: [
            {type:'text', content:'A custom SQL database that stores volunteer and volunteer job information'},
            {type:'text', content:'Custom database queries created using prepared statements to prevent SQL injection attacks'},
            {type:'text', content:'Custom Flask endpoints for data retrieval and manipulation'},
            {type:'text', content:'A user-friendly and responsive interface that allows the administrator to manage the church\'s database with little-to-no technical knowledge'},
            
           
        ]
    },
    {
        id:12,
        types: [ 'cyber'],
        header:'Computer Security',
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/ComputerSecurity',
        images: [
            { src: cyber, alt: 'Cyber Security Logo' },
           
        ],
        description: 'A collection of various Computer Security labs and assignment reports',
        footer:'Assignments include: ',
        result: [
            {type:'text', content:'A comparison of encryption and decryption using CBC, ECB, and RSA algorithms'},
            {type:'text', content:'An experiment to determine the impact of address randomization on buffer overflow attacks'},
            {type:'text', content:'A demonstration of environment variable manipulation on a Linux system and SUID programs'},
            {type:'text', content:'SQL injection attacks on a website using SELECT, UPDATE, and appending a query'},
            {type:'text', content:'A demonstration of a SYN flooding attack and SYN cookie countermeasure using docker containers on a Linux system'},
            
            
        ]
    }

]; //end of project list
