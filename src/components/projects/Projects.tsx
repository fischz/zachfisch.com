import React from 'react'
import { Container } from './projects.styles';
import { Fade } from 'react-reveal'

import Project from './Project';

import projectData from './project-data.json'


const Projects: React.FC = () => {
    return <Container>
        <h1 id='projects'>Projects</h1>
        <div>
            {projectData.map((p, i) => {
                return <Fade delay={(i) * 300}><Project key={p.title} project={p}/></Fade>
            })}
        </div>
    </Container>
}

export default Projects;