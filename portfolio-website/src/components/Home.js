
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
//import '../styles/Home.css';
import '../styles/main.css';
import Project_Tiles from './Project-Tiles';
import AnimatedBackground from './Animated-Background';
import Contact from './Contact';
import { X } from 'lucide-react';

const Home = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
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
      const navHeight = document.getElementById('nav').offsetHeight;
      const yOffset = -navHeight - 32;
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ 
        top: y, 
        behavior: 'smooth' 
      });
      AOS.refresh(); // Refresh AOS animations
    }
  };
  /*const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
 
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };*/

  return (
    <div className="min-h-screen py-48 home-container"> {/* Added padding-top to account for header navigation */}
          <AnimatedBackground />
        <div className='container mx-auto w-3/4'>
          {/*Home Header*/}
          <div className=' flex flex-col items-center justify-center  home-container' id='home'>
            <div className=" h-screen text-center w-full home-header " id='home-header'>
              <h3 className="text-5xl md:text-4xl font-bold mb-4  text-transparent bg-clip-text home-title">Katrina Dotzlaw</h3>
              {/*Tagline/Brief Description*/}
              <h1 className="text-3xl md:text-2xl font-medium mb-6  home-subtitle">Software Developer</h1>
              <p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed ">
                  Welcome! I'm Katrina Dotzlaw, a passionate Software Developer and Data Analyst with a strong background in building innovative solutions and solving 
                  complex problems in backend development, data analytics, and machine learning. 
                  <br/>
                  <br/>
                  Based in Winnipeg, Manitoba,
                  I specialize in crafting efficient software systems, mining insights from data, and leveraging advanced technologies to drive impactful results.
                  <br/>
                  <br/>
                   With a Bachelor of Science in Computer Science from the University of Manitoba and specialized training in Artificial Intelligence, Databases, and Software Engineering, 
                   I have honed my skills in both academic and professional environments. Whether it's developing robust APIs, optimizing large-scale databases, or predicting long-term trends using machine learning models, 
                   I thrive on creating user-centered, data-driven solutions that address real-world challenges.
                  <br/>
                  <br/>
                   Feel free to check out my GitHub Portfolio or connect with me on LinkedIn. Let's build something amazing together!
              </p>
              
              {/*<p className="text-lg md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed ">
                  Outside of academia, I have achieved certificaticates in C#, HTML/CSS, SQL, and Python.
              </p>
             <br/>*/}
            <div className='btn-group row d-flex align-items-center justify-content-center flex-row pb-4 gy-4'>
              <button className='button-primary ' onClick={scrollToProjects}> Skills & Tech </button>
              <button 
                className='button-primary'
                onClick={() => setIsContactOpen(true)}
              > 
                Contact Me 
              </button>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="contact flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-4">Contact</h3>
                  <button 
                    onClick={() => setIsContactOpen(true)}
                    className="footer-social-icon hover:text-[var(--accent)] transition-colors"
                  >
                    Send me a message
                  </button>
                </div>
                
                <div className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-4">Connect</h3>
                  <div className="flex space-x-6">
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

        {/* Contact Modal */}
        {isContactOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-4">
              <button 
                onClick={() => setIsContactOpen(false)}
                className="btn-contact-submit absolute top-4 right-4 z-50"
              >
                <X className="h-6 w-6" />
              </button>
              <Contact onClose={() => setIsContactOpen(false)} />
            </div>
          </div>
        )}
    </div>
  )};

  export default Home;
