import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories, projects }  from './Projects';
import '../styles/main.css';
//A seperate page with project details added dynamically based on id
const ProjectDetail = ({projects}) => {
    //track details by project id
    const { projectId } = useParams();
    const project = projects?.find(p => p.id === parseInt(projectId));
    if (!project) return <div className="pt-20 text-center text-white">Project not found</div>;

    return(
        <div className='pt-20 px-4 md:px-12  min-h-screen text-white project-detail'>
            
        </div>
    );
}
export default ProjectDetail;