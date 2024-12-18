import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryModal = ({ category, projects, onClose }) => {
  const categoryProjects = projects.filter(project => project.types.includes(category.id));
  
  return (
    <div className="modal-overlay flex items-center justify-center p-2 sm:p-4">
        <div className="modal-container w-full max-w-[95%] sm:max-w-2xl max-h-[90vh] sm:max-h-[80vh] overflow-hidden rounded-lg">
            <div className="flex justify-between items-center p-3 sm:p-6 border-b border-[var(--secondary)]">
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <div className="p-1 sm:p-2 rounded-lg bg-[var(--primary)]">
                        <img src={category.icons} alt={category.name} className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)]">{category.name}</h2>
            </div>
          <button 
            onClick={onClose}
            className="carousel-nav"
          >
            <X className="w-6 h-6 text-[var(--text)]" />
          </button>
        </div>
        
        <div className="p-3 sm:p-6 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] space-y-4 sm:space-y-6">
          <div className="modal-project-card p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-[var(--text)]">Experience</h3>
            <p className="text-[var(--text-muted)]">
              {category.years} {category.years === 1 ? 'year' : 'years'} of experience
            </p>
            <p className='mb-2 text-[var(--text)]'>{category.blurb}</p>
          </div>
          
          <div className="modal-project-card p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4 text-[var(--text)]">Projects</h3>
            <div className="space-y-3">
              {categoryProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  onClick={onClose}
                  className="block p-3 rounded-lg bg-[var(--secondary)] bg-opacity-20 hover:bg-opacity-30 transition-all duration-200"
                >
                  <h4 className="font-medium mb-2 text-[var(--text)]">{project.header}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{project.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;