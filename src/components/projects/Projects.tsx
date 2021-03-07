import React from 'react'
import { Container, ProjectsWrapper } from './projects.styles';
import { Fade } from 'react-reveal'

import Project from './Project';

import projectData from './project-data.json'


const Projects: React.FC = () => {
    return <Container>
        <ProjectsWrapper>
            <h1 id='projects'>Projects</h1>
            {projectData.map((p, i) => {
                return <Fade delay={(i) * 300} key={p.title}><Project project={p}/></Fade>
            })}
        </ProjectsWrapper>
    </Container>
}

export default Projects;