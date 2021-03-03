import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser'
import React from 'react'
import { Title } from '../header/header.styles'
import { ProjectContainer, Details, ProjectImage, Description, MadeWith, Tech, TechStack, ProjectLink, LinkIcon, ProjectLinks } from './project.styles'

interface Project {
    title: string,
    image: string,
    description: string,
    tech: string[],
    links: {
        deployment?: string
        github?: string
    }
}

interface Props {
    project: Project
}

const Project: React.FC<Props> = ({project}) => {

    return <ProjectContainer>
        <ProjectImage>
            <img src={project.image} alt={project.title} style={{width: '100%'}}/>
        </ProjectImage>
        <Details>
            <div>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <MadeWith>Made With</MadeWith>
                <TechStack>{project.tech.map(t => (<Tech key={t}>{t}</Tech>))}</TechStack>
            </div>
            <ProjectLinks>
                {project.links.deployment? <ProjectLink><LinkIcon src='/external-link.svg'/><a href={project.links.deployment}>deployment</a></ProjectLink>: null}
                {project.links.github? <ProjectLink><LinkIcon src='/github.svg'/><a href={project.links.github}>source</a></ProjectLink>: null}
            </ProjectLinks>
        </Details>
    </ProjectContainer>
}

export default Project;