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
import mlnn from '../img/ml-nn.jpg';
import esnImage from '../img/esn.JPG';
import clustal1 from '../img/clustal1.JPG';
import clustal2 from '../img/clustal2.JPG';
import clustal3 from '../img/clustal3.JPG';
import sb_arc from '../img/StudyBuddyArch.png'
import { type } from '@testing-library/user-event/dist/type';

 //list of kvps
 export const categories = [
    {id: 'react', name: 'React', icons:reactImg},
    {id: 'python', name: 'Python', icons:pythonImg},
    {id: 'sql', name: 'Databases', icons:sqlImg},
    {id: 'bio', name: 'BioInformatics', icons:bioImg},
    {id: 'cyber', name: 'Cyber Security', icons:cyber},
    {id: 'flask', name: 'API Development', icons:flaskImg},
    {id: 'fstack', name: 'Frontend Development', icons:fStackImg},
    {id:'machine-learning', name: 'Machine Learning', icons:mlnn},
    {id:'distributed', name:'Distributed Computing', icons:cyber}, //ICON
    {id: 'data-mining', name: 'Data Mining', icons:cyber}, //ICON
  
    {id:'Java', name: 'Java', icons:cyber}, //ICON
    {id:'games', name: 'Python Game Development', icons:pythonImg}, //ICON
];
//Project list
export const projects = [
    {
        id:1,
        types: [ 'python', 'data-mining'],
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
        result:
        [{
            type: 'list-left', content:[
                {type: 'text', content: 'Demographic analysis showed that individuals who are assigned female at birth, female identifying individuals, white individuals, and individuals who have had at least one vaccination are developing Long Covid-19'},
                {type: 'text', content: 'Identified high confidence association rules that indicate that individuals assigned female at birth develop Long Covid-19'},
                {type: 'text', content: 'Symptom clustering determined that cough, headache and fatigue were the most prevalent symptoms for individuals developing Long Covid-19'},
                {type: 'text', content: 'Descriptive analysis and feature selection indicated that symptom severity was a strong distinguisher'},
                {type: 'text', content: 'Our decision tree had an AUC of 0.706'},
                {type: 'text', content: 'Our custom random forest model had an AUC of 0.721'},
                {type: 'text', content: 'Sudre\'s random forest model had an AUC of 0.76'}
            ]},
            {type: 'text-footer', content: 'Publications'},
            {type: 'text-pub', content:[
                {type: 'text', content:`K. I. Dotzlaw, R. E. Dotzlaw, C. K. Leung, A. G. M. Pazdor, S. A. Szturm, and D. Tan, "Data Analytics and Prediction of Long COVID Cases with Fuzzy Logic," in 2023 IEEE International Conference on Fuzzy Systems (FUZZ), 2023, DOI: 10.1109/FUZZ52849.2023.10309753.`},
               
                {type: 'text', content:`D. Tan, C. K. Leung, K. I. Dotzlaw, R. E. Dotzlaw, A. G. M. Pazdor, and S. A. Szturm, "A Data Science Solution for Analyzing Long COVID Cases," in 2023 IEEE 24th International Conference on Information Reuse and Integration for Data Science (IRI), 2023, pp. 227-232, DOI: 10.1109/IRI58017.2023.00046`},
                {type: 'text', content:`K. Dotzlaw, R. Dotzlaw, C. K. Leung, A. G. M. Pazdor, S. Szturm, and D. Tan, "Mining Big Healthcare Data to Predict Long COVID Cases," in 2023 IEEE International Conference on Industrial Technology (ICIT), 2023, DOI: 10.1109/ICIT58465.2023.10143145`}
            ]}
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
            { src: mlnn, alt: 'Echo State Network' },
          
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ESN-MachineLearning/ESN.ipynb',
        description: 'A custom Python implementation of an Echo State Network used to recognize temporal patterns like k-step ahead forecasting in 2 different datasets',
        sub: `Process`,
        sub_content:[
            
            {
                type: 'text',
                content: `
                    An Echo State Network is a type of recurrent neural network used to recognize temporal patterns like K-Step Ahead Forcasting. 
                    Specifically, ESNs use backpropagation to feed optimized hyperparameters back into its recurrent internal state.
                   
                `
            },
            {
                type:'text',
                content:`K-Step Ahead Forcasting predicts the value of the timeseries data k timesteps ahead of the current time t. 
                   In this implementation, I use Mean-Square Error to determine prediction accuracy. K-Step Ahead Forcasting is used in both the validation stage and testing stage of model evaluation.`
            },
            {type: 'image-group', images: [
               
                
            ]},
            {type:'text', content:` 
                Using batch training and a sigmoid activation function, I trained the ESN on two timeseries datasets, 2Sine and Lorenz. Cross-validation was used to optimize hyperparameters and model error was calculated 
                using mean-square error (MSE). K-step ahead forecasting is used in both validation and testing stages to evaluate hyperparameters (k=1) and calculate model predictions (k>1)
            `},
          
        ],
        footer:'Results',
        result:[
            { type: 'text-header', content: `2Sine Timeseries` },
            { type: 'text-sub', content: `Trained with 50 hidden neurons and a regularization parameter of 0.5` },
            {type: 'list-left', content:
                [
                  {type: 'text', content: `The optimized number of hidden layer neurons was found to be 10 ` },
                  {type: 'text', content: `The optimized regularization parameter was found to be 5.0` },
                  {type:'text', content:`The optimized data split (ie the split with the lowest MSE) was found to be 40/30/30 (training/validation/testing)` },
                  {type: 'text', content: `1-step ahead prediction had an MSE of 0.142, indicating that the model generalizes well` },
                  {type: 'text', content: `2-step ahead prediction had an MSE of 1.24, demonstrating that error compounds overtime` },
                  {type: 'text', content: `Predictions with k>2 had higher MSEs and were less accurate the more steps ahead` }
                ]
              },
            { 
                type: 'image-group', 
                images: [
                    { src: sine1, alt: '2Sine 1-step ahead forecasting', descriptor: '1-step ahead forecasting with a MSE of 0.142' },
                    { src: sine2, alt: '2Sine 2-step ahead forecasting', descriptor: '2-step ahead forecasting with a MSE of 1.24' }
                ]
            },
           
            { type: 'text-header', content: `Lorenz Timeseries ` },
            { type: 'text-sub', content: `Trained with 20 hidden neurons and a regularization parameter of 0.1` },  
            {type: 'list-left', content:
                [
                    {type: 'text', content: `The optimized number of hidden layer neurons was found to be 10 ` },
                    {type: 'text', content: `The optimized regularization parameter was found to be 0.01` },
                    {type:'text', content:`The optimized data split (ie the split with the lowest MSE) was found to be 80/10/10 (training/validation/testing)` },
                    {type: 'text', content: `1-step ahead prediction had an MSE of 7.63, likely because the dataset varies more than the 2Sine dataset, though the predictions and targets still look visually similar` },
                    {type: 'text', content: `2-step ahead prediction had an MSE of 111.61, indicating that error compounds overtime` },
                    {type: 'text', content: `Predictions with k>2 had higher MSEs and were less accurate the more steps ahead` }
                ]
              },
            {
                type:'image-group',
                images: [
                    { src: lorenz1, alt: 'Lorenz 1-step ahead forecasting', descriptor: '1-step ahead forecasting with a MSE of 7.63' },
                    { src: lorenz2, alt: 'Lorenz 2-step ahead forecasting', descriptor: '2-step ahead forecasting with a MSE of 111.61' }
                ]
                
            },
            {type:'text-footer', content: `Conclusions`},
            {type:'list-left', content:[
                {type: 'text', content: `The Lorenz model demonstrates that increased model complexity leads to overfitting and a failure to generalize, 
                    as its data points had higher varience and its function was more complex compared to the 2Sine dataset.
                     Additionally, the complexity of the Lorenz function causes a smaller regularization parameter, causing outliers to significantly affect weight optimizations.`},
                {type: 'text', content: `K-Step Ahead prediction produces less accurate results the more steps ahead you attempt to predict because error compounds overtime and predictions are fed back into the model.`}
            ]}
            
          
        ],
        summary:[
            {type: 'text', content: `2Sine 1-step ahead prediction had an MSE of 0.142`},
            {type: 'text', content: `2Sine 2-step ahead prediction had an MSE of 1.24`},
            {type: 'text', content: `Lorenz 1-step ahead prediction had an MSE of 7.63`},
            {type: 'text', content: `Lorenz 2-step ahead prediction had an MSE of 111.61`},
            {type: 'text', content: `K-Step Ahead prediction produces less accurate results the more steps ahead ybecause error compounds overtime.`}
        ],
    },
    {
        id:3,
        types:['python, distributed'],
        header:'Distributed Blockchain',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
            
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/Blockchain',
        description: 
        `A distributed computing  project that connected to an external network and communicated with other peers to perform tasks such as sending and receiving messages, and determining 
        the validity and size of the network blockchain.
        `,
        sub: `Process`,
        sub_content:[
            {type:'text-sub', content: `Joining the Network`},
            {type:'list', content:
                [
                    
                ]},
               
            {type:'text-sub', content: `Consensus Process`},
            {type:'list', content:
                [
             
            ]},
        ],
        footer:'Results',
        result:[
            {type:'text', content:``},
            {type:'text', content:``},

           ],
           summary:[
            
           ],
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
        sub_content: [
            {type:'text-sub', content: `Hidden State Model`},
            {type:'text', content: 
                ` 
                Using a set of abstract states, an alphabet of output tokens, a tansition probability matrix, and an emission probability matrix,
                 the HMM calculates the total probability that the given sequence is generated by the model using an implementation of the Forward algorithm and the creation of dynamic programming tables.
            `},
            
            {type:'text-sub', content: `Forward Algorithm`},
            {type:'text', content: `
                The Forward Algorithm calculates the total probability that a given output sequence is produced by the HMM. 
                Given an output sequence (x1...xn), a state in the set of HMM states (s), and the probability of emitting a subset of the output sequence (x1..xt, t<n) by a path that ends in state s (F[s,t]), the Forward
                algorithm is recursively called to determine the F[E,n] (where E is the end state) using F[s,t]. The Forward algorithm calculates this probability as follows:
                `},
            {type:'list', content:[
                {type:'text', content: `If s is the start state AND t = 0, F[s,t] is 1`},
                {type:'text', content: `If either (but not both) s is the start state OR t = 0, then F[s,t] is 0`},
                {type:'text', content: `Otherwise (the recursive case): F[s,t]= Es,xt * the sum of all k that can transition to s (Tk,s * Forward[k,t-1]), where F[k,t-1] is the probability that we were at state k in the previous step`},
            ]},
            {type:'text', content: `The total probability that the output sequence is produced by the HMM is located in the last cell of the dynamic programming table.`}
        ],
       
        footer:'Results',
        result:[
           {type:'text', content:
             `
          
            `},
        ],
        summary:[
            
        ],
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
        `,
        sub: `Process`,
        sub_content: [
            {type:'text', content:'Takes 2 sequences and processes each alignment, tracks progress, reports intermediate and final results. The process is as follows:'},
            {type:'list-left', content:[
                {type:'text', content: 'Build the dynamic programming table based on sequence lengths and initialize the first row and column'},
                {type:'text', content: 'Fill the table by calculating the maximum score for each cell using normalized sum of pairs'},
                {type:'text', content: 'Track alignments by tracing back through the dynamic programming table and updating a global dictionary of alignments'},
                {type:'text', content: 'Traceback only returns 1 optimal alignment'},
            ]},
        ],
        footer:'Results',
        result:[
           {type:'text', content:
             `
                Using  the following alignment pattern  A-B, C-D, AB-CD where: 
            `},
            {type:'list-center', content:[
                {type:'text', content: 'A is the sequence GTTAT '},
                {type:'text', content: 'B is the sequence CGTTT'},
                {type:'text', content: 'C is the sequence GCAAT'},
                {type:'text', content: 'D is the sequence CCGAT'},
            ]},
            {type:'text', content: `The optimal alignment is 
                    -GTTAT
                    CGTT-T
                    -GCAAT
                    -CCGAT
                `},
            {type:
                'image-group', 
                images: [
                    { src: clustal1, alt: 'ClustalW A to B' , descriptor:'Aligning A with B'},
                    { src: clustal2, alt: 'ClustalW C to D' , descriptor:'Aligning C with D'},
                    { src: clustal3, alt: 'ClustalW AB to CD', descriptor:'Aligning AB with CD' },
                    
                ]
            }
        ],
        summary:[
            {type:'text', content: `The optimal alignment is: `},
            {type:'text-break', content:`-GTTAT`},
            {type:'text-break', content:`CGTT-T`}, 
            {type:'text-break', content:`-GCAAT `}, 
            {type:'text-break', content:`-CCGAT `}, 
        ],

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
        sub: `Process`,
        sub_content: [
            {type:'list-left', content:[
                { type: 'text', content: 'Preprocess a distal matrix to get a list of taxa and their distances as a key-value pair: {(taxa1, taxa2): distance}' },
                { type: 'text', content: 'Create a UTable using unions of the distance for each taxon' },
                { type: 'text', content: 'Create a delta matrix using UTable values, distances for each taxa pair, and the number of taxa' },
                { type: 'text', content: 'Recursively perform Neighbour Joining by pulling away taxa pairs with minimum distances and forming a cherry with their parent' },
                { type: 'text', content: 'Returns the optimal paths that would be used to build the tree' }
            ]},
           
        ],
        footer:'Results',
        result:[
           
        ],
        summary:[

        ],
    },
    {
        id:7,
        types:[ 'bio','python'],
        header:'Comparing  Pattern Matching Algorithms on the Sorangium Cellulosum Genome',
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
        sub_content:[
            {type:'text', content:`This pattern matching implementation compares the efficiency of the brute force and Knuth-Morris-Pratt pattern matching algorithms on the Sorangium Cellulosum genome using Python and BioPython.`},
            {type:'text', content:`In addition to comparing the algorithms, I identified a pattern that runs significantly faster with KMP and found a pattern that codes for amino acids.`},
            {type:'text-sub', content:`Brute Force & KMP Pattern Matching Algorithms`},
            {type:'text', content:
                ` The Brute Force implementation compares the given sequence to a given pattern at all  possible starting positions and returns both the total number of matches and the time taken.
                The KMP implementation uses a dynamic programming table and pointers for the indexes of the sequence and pattern. 
                When the characters at both pointer positions match, both pointers move forward. Otherwise, the pattern pointer is
                reset to the last value in the table.`}
           ],
        footer:'Results',
        result:[
            {type: 'text', content: `In the worst case, KMP can match the pattern in O(n) time (as KMP never rechecks previously matched characters), whereas the brute force algorithm can match the pattern in O(n^2) time
            (if there is a mismatch in the last spot of the pattern).`},
           {type: 'text', content: `The pattern  CCCC runs significantly faster with the Knuth-Morris-Pratt algorithm (20.45s vs 30.11s), likely because the genome has a 71% GC content and the pattern is highly repetitive.`},
           {type: 'text', content: `The pattern AACGTT returns an even 400 matches, unique from other patterns tested, indicating that the pattern is a coding sequence for a pair of amino acids.`}
        ],
        summary:[
            {type: 'text', content: `The Knuth-Morris-Pratt algorithm is significantly faster than the brute force algorithm`},
            {type: 'text', content: `The pattern CCCC is highly repetitive and has a GC content of 71%, causing it to run significantly faster with KMP`},
            {type: 'text', content: `Identified a pattern that codes for a pair of amino acids, AACGTT.`}
        ],

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
            {type:'list-left', content:[
                {type: 'text', content: `Non-clustered B+ tree indexes significantly improved runtimes`},
                {type: 'text', content: `In most cases, indexes on multiple columns performed significantly better than indexes on a single column`},
                {type: 'text', content: `There is a higher percentage of unused bytes for unoptimized queries than for optimized queries`},
                {type: 'text', content: `No overflow pages are used for queries optimized with  B+ tree indexes`}
            ]},
            

        ],
        summary:[
            {type: 'text', content: `Non-clustered B+ tree indexes significantly improved runtimes`},
            {type: 'text', content: `In most cases, indexes on multiple columns performed significantly better than indexes on a single column`},
            {type: 'text', content: `There is a higher percentage of unused bytes for unoptimized queries than for optimized queries`},
            {type: 'text', content: `No overflow pages are used for queries optimized with  B+ tree indexes`}
        ],
    },
    {
        id:9,
        types:['sql','python'],
        header:'StudyBuddy',
        images: [
            { src: sb, alt: 'Study Buddy', id: 'sb' }
        ],
        url:'https://github.com/kdotzlaw/StudyBuddy/tree/main',
        description: `An academic companion designed to help students succeed while staying organized.`,
        sub:`An Academic Companion`,
        sub_content:[
          
            {type: 'text', content:
                `The Study Buddy is an application that allows students to keep track of their study
                 progress and current grades.  It has a custom database that allows the creation, removal and modification of users, classes, and tasks. 
                 Addiitonally, the application can track the user's study time, grades, and progress.
                 As per project requirements, the application can handle 1000 requests from 100 users concurrently.
                
                `},
              
                {type:'image-group', 
                    images: [
                    { src: sb_arc, alt: 'Study Buddy', id: 'sb_arc' }
                   
                    
                ]},
                {type:'text-sub', content:`Study Buddy Architecture`},
        ],
        footer:'Contributions',
        result:[
            {type:'list-left', content:[
                {type: 'text', content: 'Developed a custom MSSQL database that stores user data, classes, and assignments'},
                {type: 'text', content: 'Created database integration tests using Python unittest'},
                {type: 'text', content: 'Used prepared statements and parameterized queries to prevent SQL injection attacks'},
                {type: 'text', content: 'Collaborated with our Server Manager to ensure that the database successfully integrated with the Flask server'},
                {type: 'text', content: 'Worked with our CI/CD lead to ensure that the backend was successfully deployed with GitHub Actions and Docker'},
                {type: 'text', content: 'Created project documentation including a wiki, milestone reports, test plans, and meeting minutes'},
                {type: 'text', content: 'Performed load testing with Locust to ensure that the application could handle high traffic and concurrent requests'},
            ]},
        ],
        summary:[
            {type: 'text', content: 'Developed a custom and secure MSSQL database that interacts with the Flask server'},
            {type: 'text', content: 'Created database unit and integration tests'},
            {type: 'text', content: 'Created informative, user-friendly project documentation'},
            {type: 'text', content: 'Application handles 1000 requests from 100 users concurrently'},
        ],
        
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
        types: ['react','flask','python','sql'],
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
        sub:`Process`,
        sub_content:[
            {type:'text', content:'A collection of various Computer Security labs and assignment reports done in a Linux environment using Python, C, and SQL'},
        ],
        footer:'Assignments include: ',
        result: [
            {type:'list', content:[
                {type:'text', content:'A comparison of encryption and decryption using CBC, ECB, and RSA algorithms'},
                {type:'text', content:'An experiment to determine the impact of address randomization on buffer overflow attacks'},
                {type:'text', content:'A demonstration of environment variable manipulation on a Linux system and SUID programs'},
                {type:'text', content:'SQL injection attacks on a website using SELECT, UPDATE, and appending a query'},
                {type:'text', content:'A demonstration of a SYN flooding attack and SYN cookie countermeasure using docker containers on a Linux system'},
                
                
            ]},
            
        ]
    },{
        id:13,
        types: ['games'],
        header:'Blackjack',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
        ],
        url:'https://github.com/kdotzlaw/python-portfolio/blob/main/blackjack/main.py',
        description: 'A simple console driven Blackjack game against the computer. Built with Python and focuses on fundamentals like conditionals, loops, randomization, and project planning.',
    },
    {
        id:14,
        types: ['games'],
        header:'Tic-Tac-Toe',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
        ],
        url:'https://github.com/kdotzlaw/python-portfolio/blob/main/professional-portfolio/tic-tac-toe.py',
        description: 'Plays a game of Tic Tac Toe against the computer where the computer makes weighted choices. A python game that focuses on conditionals, loops, dictionaries, and game logic.',
    },{
        id:15,
        types: ['games'],
        header:'Snake',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
        ],
        url:'https://github.com/kdotzlaw/python-portfolio/blob/main/turtle-graphics/snake/main.py',
        description: 'A game created with Python and Turtle Graphics that explores event handling, collision detection, game mechanics, and game design.',
    },{
        id:16,
        types:['machine-learning'],
        header:'2D Multiagent Systems Communication',
        images: [
           
          
        ],
        url:'https://github.com/kdotzlaw/UniversityProjects/tree/main/Multiagent-Systems',
        description: 'A research project that compared the performance of different communication protocols for 2D multiagent systems by assigning points to evaluation criteria.',
        sub:``,
        sub_content:[
            {type:'text-header', content:'Reinforcement Learning'},
            {type:'text', content:
                `
                    This project defines reinforcement learning as described by Metaric (1997) and Anderson et al. (2002).
                    Reinforcement learning is a method of allowing agents to receive feedback based on the outcomes of their actions, where rewards and punishments are determined by the environment.
                `},
            {type:'text-header', content:'Cognitive Communicaiton'},
            {type:'text', content:`
                Cognitive communication is when an agent in a system encounters one or more types of uncertainty that is addressed via communication. 
                It is divided into two categories: myopic and non-myopic (centralized and decentralized) communication.  
                `},
                {type:'list-left', content:[
                    {type: 'text', content: 
                        `
                        The myopic approach deals with uncertainty by finding at least one optimal solution using Becker's myopic assumptions (Becker, 2009)
                        
                        `},
                    {type: 'text', content: 
                        `
                        The centralized approach identifies the decisions of the agents based on the overall system state. (Xuan and Lesser, 2002)
                        
                        `},
                    {type: 'text', content: 
                        `
                        The decentralized approach requires only partial system knowledge in each agent, causing each agent to deal with communication directly (Xuan and Lesser, 2002).
                        
                        `},
                ]},
        
            {type:'text-header', content:'Evaluation Criteria'},
            {type:'text', content:`There are 4 criteria that were used to evaluate the effectiveness of the communication techniques. In order to determine the most effective communication technique, 
                I assign points to each criterion so quantitatively, the higher the points, the more effective the communication technique is. A maximum of 6 points can be awarded in total.`},
            {type:'list-left', content:[
                    {type: 'text', content: `Choice to Communicate: 1 point if agents choose when to communicate, 0 otherwise`},
                    {type: 'text', content: `Information Space Allotment: Low space earns 2 points, medium space earns 1 point, high space earns 0 points`},
                    {type: 'text', content: `Value Calculations: 1 point if the policy performs a value calculation, 0 otherwise`},
                    {type: 'text', content: `Solutions to Common Communication Problems: 2 points if the policy solves all common communication problems, 1 point if it solves one common communication problem, 0 otherwise`},
                ]},
        ],
        footer:'Results',
        result:[
            {type:'list-left', content:[
              {type: 'text', content: 'Reinforcement learning communication received a total of 5 points'},
              {type: 'text', content: 'Myopic cognitive communication recceived a total of 3 points'},
              {type: 'text', content: 'Centralized cognitive communication received a total of 2 points'},
              {type: 'text', content: 'Decentralized cognitive communication received a total of 2 points'},
              {type: 'text', content: 'Cognitive Communication received a maximum of 3 points from its sub-protocols'},
              {type: 'text', content: 'Based on the evaluation criteria,  reinforcement learning communication was found to be the most effective protocol for 2D multiagent systems'},
            ]},
            
        ],
        summary:[
            {type: 'text', content: 'Reinforcement learning earned 5 points'},
            {type: 'text', content: 'Cognitive communication earned 3 points'},
            {type: 'text', content: 'Based on the evaluation criteria, reinforcement learning communication was the most effective protocol for 2D multiagent systems'},
        ]

    }

]; //end of project list
