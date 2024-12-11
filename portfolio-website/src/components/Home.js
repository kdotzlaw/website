
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
             <br/>
            <div className='btn-group row d-flex align-items-center justify-content-center flex-row pb-4 gy-4'>
              <button className='button-primary '> View my Projects </button>
              <button className='button-primary'> Contact Me </button>
            </div>
           
            </div>{/*End Home Header*/}
            {/*Links to contact and projects??
            <div className='btn-group row d-flex align-items-center justify-content-center flex-row pb-4 gy-4'>
              <div className='col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center'> 
                <a href='#' className='btn btn-outline-primary'>Contact</a>
              </div>
              <div className='col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center'>
                <a href='#' className='btn btn-outline-primary'>Projects</a>
              </div>
              
            </div>
            */}
           

            {/*Category Tiles*/}
              <section className=' text-white ' data-aos='fade-up' data-aos-duration='1000'> 
                <article className=' pt-5 pb-5' id='projects'>
                  <Project_Tiles />
                </article>
              </section>
              <section className='bg-gunmetal text-white'>
                <article id='project-detail'>

                </article>
              </section>
          
          
          </div>
        </div>

    </div>
  )};

  export default Home;