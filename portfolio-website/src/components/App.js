import { useState } from 'react';
//import '../styles/App.css';
import '../styles/main.css';
import Nav from './Nav';
import Home from './Home';
import Projects from './Project-Tiles';
import AnimatedBackground from './Animated-Background';
import Contact from './Contact';


import Blog from './Blog';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProjectDetail from './Project-Detail';
import { projects } from './Projects';
/*    <section id='blog'><Blog /></section>
                    <section id='contact'><Contact /></section>*/
function App() {
  //const [currentComponent, setCurrentComponent] = useState('Home');  
  //use routes to determine pages
  return(
    <HashRouter>
        <div className="App">
            <Nav />
    
            <Routes>
                <Route path='/' element={
                  <>
                    <section id='home'><Home /></section>
                  </>
                } />
                <Route path="/projects/:projectId" element={<ProjectDetail projects={projects} />} />
            </Routes>
        </div>
    </HashRouter>
  
  );
}
export default App;
