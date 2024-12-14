
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import '../styles/Home.css';
import '../styles/main.css';
import Project_Tiles from './Project-Tiles';


const Home = () => {
  //Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  //Smooth scrolling to Project-Tiles
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="min-h-screen py-48 home-container"> {/* Added padding-top to account for header navigation */}
     
        <div className='container mx-auto w-3/4'>
          {/*Home Header*/}
          <div className=' flex flex-col items-center justify-center  home-container' id='home'>
            <div className=" h-screen text-center w-full home-header " id='home-header'>
              <h3 className="text-5xl md:text-4xl font-bold mb-4  text-transparent bg-clip-text home-title">Katrina Dotzlaw</h3>
              {/*Tagline/Brief Description*/}
              <h1 className="text-3xl md:text-2xl font-medium mb-6  home-subtitle">Software Developer</h1>
              <p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed ">
                  I am a recent graduate of the University of Manitoba with a Bachelor's degree in Computer Science, specializing in Software Engineering, Artificial Intelligence, and Databases.
              </p>
              
              <p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed ">
                  Outside of academia, I have achieved certificaticates in C#, HTML/CSS, SQL, and Python.
              </p>
             <br/>
            <div className='btn-group row d-flex align-items-center justify-content-center flex-row pb-4 gy-4'>
              <button className='button-primary ' onClick={scrollToProjects}> View my Projects </button>
              <button className='button-primary'> Contact Me </button>
            </div>
           
            </div>{/*End Home Header*/}
            

            {/*Category Tiles*/}
              <section className=' text-white ' data-aos='fade-up' data-aos-duration='1000'> 
                <article className=' pt-5 pb-5' id='projects'>
                  <Project_Tiles />
                </article>
              </section>
              <section className=' text-white'>
                <article id='project-detail'>

                </article>
              </section>
          
          
          </div>
            {/*Footer with contact and socials */}
            <footer className="py-8 mt-auto footer-container">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                      <div className="text-center md:text-left">
                          <h3 className="text-xl font-semibold mb-2">Contact</h3>
                          <a href="mailto:katrina@dotzlaw.com" className="footer-social-icon">
                              katrina@dotzlaw.com
                          </a>
                      </div>
                      
                      <div className="text-center md:text-right">
                          <h3 className="text-xl font-semibold mb-2">Connect</h3>
                          <div className="flex justify-center md:justify-end space-x-4">
                              <a 
                                  href="https://www.linkedin.com/in/kdotzlaw" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="footer-social-icon"
                              >
                                  <i className="fa-brands fa-linkedin text-2xl" />
                              </a>
                              <a 
                                  href="https://github.com/kdotzlaw" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="footer-social-icon"
                              >
                                  <i className="fa-brands fa-github text-2xl" />
                              </a>
                          </div>
                      </div>
                  </div>
                  
                  <div className="text-center mt-8 text-sm footer-text-muted">
                      © {new Date().getFullYear()} Katrina Dotzlaw. All rights reserved.
                  </div>
              </footer>
       
        </div>

    </div>
  )};

  export default Home;