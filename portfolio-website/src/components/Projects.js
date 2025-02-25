

 import { type } from '@testing-library/user-event/dist/type';

//Logos
import flaskImg from '../img/flask.png';
import reactImg from '../img/react.png';
import pythonImg from '../img/python.png';
import sqlImg from '../img/sql.png';
import bioImg from '../img/bio.png';
import html from '../img/html5-brands-solid.svg';
import java from '../img/java-brands-solid.svg';
import git from '../img/github-brands-solid.svg';
import data from '../img/square-binary-solid.svg';
import c from '../img/code-solid.svg';
import distrib from '../img/computer-solid.svg';
//Images
import cyber from '../img/cyber.png';
// * ESN Images
import sine1 from '../img/2sine-1step.png';
import sine2 from '../img/2sine-2step.png';
import lorenz1 from '../img/lorenz-1step.png';
import lorenz2 from '../img/lorenz-2step.png';
import mlnn from '../img/ml-nn.jpg';
import esnImage from '../img/esn.JPG';
// * Bio Images
import clustal1 from '../img/clustal1.JPG';
import clustal2 from '../img/clustal2.JPG';
import clustal3 from '../img/clustal3.JPG';

// * Com,p Sec Images
import rsa_cbc from '../img/rsa_CBC_encrypt.JPG';
import rsa_ecb from '../img/rsa_ECB_encrypt.JPG';
import orig_rsa from '../img/orig_rsaImg.JPG';

// * Game Images


// * Misc Images
import peace from '../img/peace.png';
import sb_arc from '../img/StudyBuddyArch.png'
import sb from '../img/study-buddy.png';



 //list of kvps
 export const categories = [
    {id: 'react', name: 'React', icons:reactImg, years:2, blurb:`
        I started learning React on my own by following various tutorials and Udemy courses. I've used React for web development, and have worked on various projects including
        a portfolio website, and a DBMS administrator dashboard (ongoing).
        
        `},
    {id: 'python', name: 'Python', icons:pythonImg, years:'5+', blurb:`
        I started learning Python on my own, earning certificates through Udemy. 
        I've used Python for web development, creation and maintenence of DBMS, data analysis, bioinformatics, machine learning and game development.
        The most notable projects I've worked on include a neural network for time series prediction, and a  model for predicting long covid-19 cases using data mining and machine learning, which resulted in three publications in IEEE.
        
        `},
    {id: 'sql', name: 'Databases', icons:sqlImg, years: '5+', blurb:`
        I've been working with databases since high school and furthered my knowledge through various database courses, focusing on database security, efficiency, and persistence. 
        I've worked with SQLite, SQL Server, MySQL, and MSSQL. 
        
        `},
    {id: 'bio', name: 'BioInformatics', icons:bioImg, years:1, blurb:`
        I took a bioinformatics course during my undergraduate degree, which focused on analyzing various biological datasets using Markov models, pattern mattching, and sequence alignment. 
        I've worked on projects including a custom implementation of ClustalW, pattern matching on the Sorangium Cellulosum genome using the KMP algorithm, 
        Neighbour Joining with Python to determine optimal alignments, and a custom implementation of a Hidden Markov Model.
        `},
    {id: 'cyber', name: 'Cyber Security', icons:cyber, years:1, blurb:`
        My first exposure to cyber security was through a university course. I've worked on various projects including a comparison of cryptographic algorithms and mitigating various exploits and vulnerabilities in C.
        `},
    {id: 'flask', name: 'API Development', icons:flaskImg, years:2, blurb:`
        I have experience with Flask and have used it to create APIs for various web projects.  I've created endpoints, API documentation, and API integration tests with backend Python components.
        
        `},
    {id: 'fstack', name: 'Frontend Development', icons:html, years:2, blurb:`
        I have earned advanced certificates in HTML/CSS for web development through Udemy. I've used HTML, CSS, and JavaScript for various web projects, including a portfolio website and a DBMS administrator dashboard.
        I also have experience using Wordpress and adding custom HTML/CSS to a Wordpress site.
        `},
    {id:'machine-learning', name: 'Machine Learning', icons:mlnn, years:2, blurb:`
         I've worked on various projects that use machine learning including a custom implementation of a neural network for time series prediction, a research project that analyzes multiagent system communication methods,
         and a model for predicting long covid-19 cases.
        `},
    {id:'distributed', name:'Distributed Computing', icons:distrib, years:1, blurb:`
        My first exposure to distributed computing was through a university course. During this course, I used Python to join and interact with a network of peers, with the intent of synchronizing a blockchain.
        `}, //ICON
    {id: 'data-mining', name: 'Data Mining', icons:data, years:2, blurb:`
        My first exposure to data mining was through a university course where I worked with a group to analyze COVID-19 data using Python and data mining techniques, which resulted in three publications in IEEE alongside our professor.
        `}, //ICON
    {id:'c', name: 'C/C#/C++', icons:c, years:2, blurb:`
        I used C  throughout my undergraduate degree, specifically in cyber security, where I focused on mitigating exploits and encryption. 
        I have earned beginner and intermediate certificates in C# through Udemy.
        `}, //ICON
    {id:'git', name:'Git', icons:git,years:'5+', blurb:`
        I used Git for the entirety of my undergraduate degree, and have been using it professionally since then.
        I primarily use Git for version control and organization, but I have experience GitHub actions and GitHub pages to deploy and host various web-based projects.
        `},
    {id:'Java', name: 'Java', icons:java, years:'5+', blurb:`
        I've been working with Java for over 5 years, starting when I was in high school.
        I've worked on a variety of projects including database interactions, game development, and OOP applications.
        `}, //ICON
    {id:'games', name: 'Game Development', icons:pythonImg,years:"1+", blurb:`
        I've developed games in Python, Ruby, and Java, focusing on OOP and event-driven programming. Most of my games have been console-based. With Java I have developed Connect 4, where a user plays against the computer. Using Ruby,
        I developed Clue using an OOP approach. Using Python, I've created Snake, Blackjack, and Tic-Tac-Toe.
        `}, //ICON
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
        types:['python', 'distributed'],
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
            {type:'list-left', content:
                [
                    {type:'text', content:`Send a keep-alive message to random peers`},
                    {type:'text', content:`Send a message to a random peer with a payload of a random number`}
                ]},
            {type:'text-sub', content: `Consensus Process`},
            {type:'list-left', content:
                [
                    {type:'text', content:`Request STATS from known peers and wait for STAT_REPLY`},
                    {type:'text', content:`Identify the longest chain using max(height, hash) and comparisons, breaking ties using the max number of peers with the longest chain`},
                    {type:'text', content:`Request blocks round-robin from all peers with the longest chain`},
                    {type:'text', content:`Validate all blocks before adding to local chain and store blocks in a list since they are not guaranteed to be in order`},
                    {type:'text', content:`Mined blocks that are ANNOUNCED are either added to the top of the local chain if it is built or stored in the list`},
                ]},
         
        ],
        footer:'Results',
        result:[
            {type:'list-left', content:[
                {type:'text', content:`CONSENSUS is done every 2 minutes to ensure chain synchronization with distributed network and CONSENSUS requests can trigger the consensus process locally`},
                {type:'text', content:`The local chain is always validated end-to-end before sending any block replies to peers and upon receiving a STATS request`},
                {type:'text', content:`Correctly validates blocks using the following checks: `},
              
                ]},
                {type:'list-number', content:[
                    {type:'text', content:` Nonce is max 40 characters`},
                    {type:'text', content:`A block must have >10 messages`},
                    {type:'text', content:`Each message in a block  is max 20 characters`},
                    {type:'text', content:` Each block hash must respect the defined order`},
                    {type:'text', content:`Block difficulty >= 9`},
                        ]}
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
            {type:'text', content: `The optimal alignment is: -GTTAT CGTT-T -GCAAT -CCGAT `},
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
            {type:'list-left', content:[
                {type: 'text', content: 'An archive of Church Messages that is searchable by keywords and is linked to a recent Message display on the home page'}, 
                {type: 'text', content: 'An event management system that dynamically updates when events are added or when events have passed '},   
                {type: 'text', content: 'Custom CSS to personalize the site to match Church branding'},
                {type: 'text', content: 'Client support including creating technical documentation for client site management, debugging technical issues, and site migration between hosting services'},
            ]},

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
            {type:'list-left', content:[
                {type: 'text', content: 'A custom SQL database that stores volunteer and volunteer job information'},
                {type: 'text', content: 'Custom database queries created using prepared statements to prevent SQL injection attacks'},
                {type: 'text', content: 'Custom Flask endpoints for data retrieval and manipulation'},
                {type: 'text', content: 'A user-friendly and responsive interface that allows the administrator to manage the church\'s database with little-to-no technical knowledge'},
            ]},
            
           
        ]
    },
   {
        id:12,
        types: ['games'],
        header:'Blackjack',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
        ],
        url:'https://github.com/kdotzlaw/python-portfolio/blob/main/blackjack/main.py',
        description: 'A simple console driven Blackjack game against the computer. Built with Python and focuses on fundamentals like conditionals, loops, randomization, and project planning.',
        footer:'Key Features',
        result:[
            {type:'text', content:'A simple console driven Blackjack game against the computer. Built with Python and focuses on fundamentals like conditionals, loops, randomization, and project planning.'},
        ],

    },
    {
        id:13,
        types: ['games'],
        header:'Tic-Tac-Toe',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
        ],
        url:'https://github.com/kdotzlaw/python-portfolio/blob/main/professional-portfolio/tic-tac-toe.py',
        description: 'Plays a game of Tic Tac Toe against the computer where the computer makes weighted choices. A python game that focuses on conditionals, loops, dictionaries, and game logic.',
        footer:'Key Features',
        result:[
            {type:'text', content:'Plays a game of Tic Tac Toe against the computer where the computer makes weighted choices. A python game that focuses on conditionals, loops, dictionaries, and game logic.'},
        ],
    },{
        id:14,
        types: ['games'],
        header:'Snake',
        images: [
            { src: pythonImg, alt: 'Python Logo' },
        ],
        url:'https://github.com/kdotzlaw/python-portfolio/blob/main/turtle-graphics/snake/main.py',
        description: 'A game created with Python and Turtle Graphics that explores event handling, collision detection, game mechanics, and game design.',
        footer:'Key Features',
        result:[
            {type:'text', content:'A game created with Python and Turtle Graphics that explores event handling, OOP, collision detection, game mechanics, and game design.Created an OOP snake game with the following features:'},
            {type:'list-left', content:[
                {type: 'text', content: 'Snake movement is determined by keyboard input'},
                {type: 'text', content: 'Snake eats food when it is within 15 pixels of the food'},
                {type: 'text', content: 'Snake grows in size when food is eaten and the score increases'},
                {type: 'text', content: 'Game ends when the snake collides with the wall or itself'},
        ]},],

    },{
        id:15,
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

    },{
        id:16,
        types:['cyber','c'],
        header:'Encryption & Decryption',
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ComputerSecurity/rsa/rsa.pdf',
        description: 'A comparison between CBC encryption and ECB encryption on a given image, and a demonstration of RSA encryption and decryption on given text.',
        images:[
           
             
            
        ],
        sub:'Process',
        sub_content:[
            {type:'text-sub', content:`CBC & ECB Encryption`},
            {type:'text', content:`
                Using the same key,  I compared the encryption security of CBC and ECB encryption on the image below.
                `},
            {type:'image-group', images: [
                { src: orig_rsa, alt: 'Original Image', id: 'orig_rsa' },
                ]},
                {type:'text-sub', content:`RSA Encryption & Decryption`},
                {type:'text', content:`
                   Using C and the BIGNUM library, I derived the private key, encrypted plaintext, and verifyed the encryption by decrypting the ciphertext using the public key. RSA private key generation is done using the following steps:
                    `},
            {type:'list-left', content:[
                {type:'text', content:`Calculate n = p * q`},
                {type:'text', content:`Calculate phin = (p-1) * (q-1) using p = hex (p-1) and q = hex (q-1)`},
                {type:'text', content:`Calculate private key d such that ed = 1 mod phin`},
            ]},    
            {type:'text', content:`Encryption verification is done using the following steps:`},
            {type:'list-left', content:[
                {type:'text', content:`Encrypt plaintext using the public key (e,n) and res = plaintext^e mod n`},
                {type:'text', content:`Decrypt ciphertext using the private key d and res = ciphertext^d mod n`},
              
            ]},
    
        ],
       footer:'Results',
       result:[
          {type:'text-sub', content:`CBC Encryption`},
            {type:'image-group', images: [
                { src: rsa_cbc, alt: 'CBC Encryption', id: 'rsa_cbc' },
            ]},
            {type:'text', content:`In the image above, there are no clear patterns to see, only noise.`},
            {type:'text-sub', content:`ECB Encryption`},
            {type:'image-group', images: [
                { src: rsa_ecb, alt: 'ECB Encryption', id: 'rsa_ecb' },
            ]},
            {type:'text', content:`In the image above, there are clear patterns that show the shapes of the original image and similar colours. Typically images are not suitable for ECB encryption since patterns are repeated in ECB.`},
            {type:'text-sub', content:`Overall Results`},
            {type:'text', content:`Compared to CBC, ECB is less secure since patterns are repeated and are clearly visible in the encrypted image.`},
            
            {type:'text-sub', content:`RSA Encryption & Decryption`},
            {type:'text', content:`Using the derived private key, I successfully encrypted the plaintext, "A top secret!" and decrypted the ciphertext to obtain the original plaintext.`},

        ],
        summary:[
            {type: 'text', content: 'A comparison between CBC encryption and ECB encryption on a given image, and a demonstration of RSA encryption and decryption on given text.'},

        ],

    },{
        id:17,
        types:['cyber','c'],
        header:'Buffer Overflow Exploits',
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ComputerSecurity/buffer-overflow/bufferoverflow-address-randomization.pdf',
        description: 'An experiment to determine the impact of address randomization on buffer overflow exploits, and a demonstration of a buffer overflow exploit.',
        images:[



        ],
        sub:'Buffer Overflow',
        sub_content:[
           {type:'text', content:`
            When address randomization is off, I can use gbd to create an empty bad file, create a breakpoint at bof, and run the provided shellcode. 
            Using the breakpoint, I can determine the pointer to the current stack frame and the buffer. Using the space between the buffer and the stack frame,
             I can determine the location of the return address.
            I edited the provided python script to change the return address to perform a buffer overflow exploit, which will give me root access. 
            Using the terminal, I can compile the script and make it executable. I then run the exploit and get root access.
            `},
        ],
        footer:'Buffer Overflow & Address Randomization',
       result:[
           {type:'text', content:`With address randomization on, it took just over 12 minutes for the buffer overflow exploit to work.`},
        ],
        summary:[
            {type: 'text', content: 'This lab compares the exploitability of a buffer overflow attack and the effectiveness of address randomization.'},

        ],
    },{
        id:18,
        types:['cyber','c'],
        header:'Environment Variable Manipulation',
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ComputerSecurity/env-vars/env-vars.pdf',
        description: 'A demonstration of environment variable manipulation in Linux, including passing environment variables between processes. Additionally explores the PATH environment variable and how it affects SUID programs.',
        images:[    

        ],
        sub:'Passing Environment Variables & SUID Programs',
        sub_content:[
           {type:'text', content:`
            In this experiment, I passed environment variables between a parent and child process and then between the child back to the parent. I then piped the output of both attempts to separate files and compared the results using diff. 
            Since diff detects no difference between the two files, the environement variables of both processes are the same, indicating that the environment variables were passed successfully.
            `},
            {type:'text', content:`To change a program into a SUID program, I followed the steps below:`},
            {type:'list-left', content:[
                    {type:'text', content:`To change ownership to root: sudo chown root a.out`},
                    {type:'text', content:`To make a.out a SUID program: sudo chmod 4755 a.out After ensuring 
                        hat I wasnt in a root account, I set the environment variables PATH, LD_LIBRARY_PATH and a newly created variable TEST as specified in the lab.
                        `},
                    ]},
            {type:'text', content:`Using ./a.out | grep LD_LIBRARY_PATH, I can see that the environment variable is NOT transfered to the SUID program, but TEST and PATH are.`},
           ],
      
      footer:'Trojans',
      result:[
        {type:'text',content:`
            
            Using the provided code, suid.c, I compiled it into an object tile (goodls), set its root ownership, and made it a SUID program. 
            Running goodls searches the correct path and runs ls.
            To get suid.c to run a trojan, I created another file (badls) and compiled it into ls. I changed the PATH environement variable so that the home directory will be searched before the PATH variable. 
            Since badls was compiled into ls and it has the same name as the relative path in goodls, it was run before goodls and the trojan was executed.
            
        `}
          
      ],
      summary:[
          {type: 'text', content: 'This lab is a demonstration of environmeent variable manipulation, creation, and passing environement variables between processes.'},
  
      ],
    },{
        id:19,
        types:['cyber','sql'],
        header:'SQL Injection',
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ComputerSecurity/SQL-injection/sql-injection.pdf',
        description: 'Demonstrates SQL injection attacks on a website using both CMD and website user input to perform injections. SQL injections include injection via SELECT, appending a new SQL statement to user input, and injection via UPDATE.',
        images:[
        ],
        sub:'',
        sub_content:[
           
        ],
     
     footer:'Process',
     result:[
        {type:'text', content:`This lab is a demonstration of SQL injection using a webpage form and the command line to view and change database information. SQL injection commands include:`},
        {type:'list-left', content:[
            {type:'text', content:`Injection via SELECT directly on a web page`},
            {type:'text', content:`Injection via SELECT using curl on the command line`},
            {type:'text', content:`Injection via appending a new SQL statement on a web page`},
            {type:'text', content:`Injection via UPDATE on a web page`},
            
          ]
        },
         
     ],
     summary:[
         {type: 'text', content: ''},
 
     ],
    },{
        id:20,
        types:['cyber'],
        header:'SYN Flooding & SYN Cookie Countermeasure',
        url:'https://github.com/kdotzlaw/UniversityProjects/blob/main/ComputerSecurity/SYN-flooding/SYN-flooding.pdf',
        description: 'Demonstrates a SYN flooding attack and SYN cookie countermeasure using docker containers to simulate a victim and an attacker.',
        images:[



        ],
        sub:'SYN Flooding',
        sub_content:[
           {type:'text', content:`
            On the victim container, I turned off the cookie counter measure by setting the SYN_COOKIE environment variable to 0. 
            Then I launched the SYN-Flooding attack from the attacker container on the victim container. When checking the victim container using netstat, I can see that the queue of connections is full, 
            and after flushing all past records of connection, I can attempt to telnet onto the victim container. Attempting to telnet results in a timeout, indicating that the SYN-Flooding attack was successful.
        `},
        ],
       
       footer:'SYN Cookie Countermeasure',
       result:[
           {type:'text',content:`
            The syncookie countermeasure essentially causes connections to not be held in the queue. 
            Instead, the victim container passes a cookie with its SYN+ACK and drops the connection from its queue. 
            Then if the victim gets an ACK response with a cookie, it recalculates the cookie using known connection information.
             If the newly calculated cookie matches the cookie the victim recieved with the response, 
            the connection is ESTABLISHED. With this countermeasure in place, the queue doesn't need to store previous connection records, since connections rely on calculating and matching cookies.
            `},
            {type:'text', content:`
                To turn the countermeasure back on, I set the SYN_COOKIE environment variable to 1 on the victim container. 
                Then I ran the SYN-Flooding attack again and checked the SYN_RECV connections queue on the victim container.
                 On my host VM, I can successfully telnet to the victim container, showing that the SYN-Cookie countermeasure was effective.
            `},
        ],
        summary:[
            {type: 'text', content: ''},

        ],
    }

]; //end of project list
