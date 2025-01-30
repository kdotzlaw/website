import React, { useState, useEffect } from 'react';
//import '../styles/Nav.css';
import '../styles/main.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { projects } from './Projects';
import Contact from './Contact';



const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsSidebarOpen(!isSidebarOpen);
  };

  //Main Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     <header id='nav' 
            className={`p-4 fixed w-full z-40 top-0 left-0 text-white nav-container transition-all duration-300 
            ${ scrolled ? 'nav-scrolled' : ''
        }`}>
        <nav className='container mx-auto flex justify-between items-center nav-content'>
          <ul className="flex space-x-6 nav-links">
            <li id='nav-item'>
              <Link 
                    to='/' 
                    className="py-2 px-4 nav-link"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                  Home
                </Link>
            </li>
            <li id='nav-item'>
              <a href='#projects' 
                 onClick={toggleSidebar} 
                 className="py-2 px-4 nav-link">
                Projects
              </a>
            </li>
            <li id='nav-item'><Link to='/blog' className="py-2 px-4 nav-link">Blog</Link></li>
            <li id='nav-item'>
              <button 
                onClick={() => setIsContactOpen(true)} 
                className="py-2 px-4 nav-link"
              >
                Contact
              </button>
            </li>
          </ul>
          <ul className="flex space-x-4 social-links">
            <li id='nav-item'>
              <a href='https://www.linkedin.com/in/kdotzlaw' target="_blank" rel="noopener noreferrer">
                <i id='social' className="fa-brands fa-linkedin text-2xl text-blue-600 hover:text-blue-800 social-icon"></i>
              </a>
            </li>
            <li id='nav-item'>
              <a href='https://github.com/kdotzlaw' target="_blank" rel="noopener noreferrer">
                <i id='social' className="fa-brands fa-github text-2xl text-gray-800 hover:text-gray-600 social-icon"></i>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-[var(--bg-card)] backdrop-blur-md transform transition-transform duration-300 ease-in-out z-50 ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex justify-between items-center p-6 border-b border-[var(--secondary)]">
          <h2 className="text-[var(--text)] text-xl font-semibold">Projects</h2>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-5rem)] px-2">
          <ul className="p-4 space-y-2">
            {projects.map((project) => (
              <li key={project.id}>
                <button
                  onClick={() => handleProjectClick(project.id)}
                  className="w-full text-left px-4 py-3 text-[var(--text)] hover:bg-[var(--secondary)] hover:bg-opacity-20 rounded-lg transition-colors duration-200"
                >
                  <h3 className="font-medium">
                    {project.header || "Untitled Project"}
                  </h3>
                  {project.types && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.types.map((type, index) => (
                        <span 
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-[var(--accent)] bg-opacity-20 text-[var(--text)]"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative w-full max-w-2xl mx-4">
            <button 
              onClick={() => setIsContactOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
              <X className="h-6 w-6" />
            </button>
            <Contact onClose={() => setIsContactOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};
export default Nav;
