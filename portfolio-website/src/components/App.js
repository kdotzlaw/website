import { useState } from 'react';
import '../styles/App.css';
import Nav from './Nav';
import Home from './Home';
import Projects from './Project-Tiles';

import Contact from './Contact';


import Blog from './Blog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectDetail from './Project-Detail';
import { projects } from './Projects';
/*    <section id='blog'><Blog /></section>
                    <section id='contact'><Contact /></section>*/
function App() {
  //const [currentComponent, setCurrentComponent] = useState('Home');  
  //use routes to determine pages
  return(
    <BrowserRouter>
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
    </BrowserRouter>
  
  );
}
export default App;
