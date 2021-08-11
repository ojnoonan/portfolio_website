import React from 'react'
import './projects.css'
import { projects } from './Data.js'

function Projects() {
    return (
        <div className="projects-page" id='projects'>
            <h1>Projects</h1>
            <div className="projects-wrapper">
            {projects.map(project => 
                <div key={project.title} style={{ backgroundImage: `url(images/${project.image})` }} className="project-card">
                    <div className="project-card-content">
                        <h2 className="project-card-title">{project.title}</h2>
                        <p className="project-card-body">
                            {project.body}
                        </p>
                        <a href={`${project.link}`} target="_blank" rel="noreferrer" className="project-button">{project.linkTitle}</a>
                    </div>
                </div>  
            )}
            </div>
        </div>
    )
}

export default Projects
