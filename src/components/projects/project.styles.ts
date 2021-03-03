import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    margin-bottom: ${props => props.theme.margin.m};
    background: ${props => props.theme.colors.background};
    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`

export const ProjectImage = styled.div`
    height: 300px;
    width: 300px;
    margin-right: ${props => props.theme.margin.s};
    @media screen and (max-width: 576px) {
        margin: auto;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.padding.s};
`


const SpaceBetween = styled.div`
    width: 2rem;
`

export const Title = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 1rem;
`

export const Description = styled.div`
    margin-bottom: 1rem;
`

export const TechStack = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 576px) {
        flex-direction: column;
        text-align: left;
        padding-left: ${props => props.theme.padding.m};
    }
`

export const MadeWith = styled.div`
    font-weight: bold;
    margin: 0;
    margin-right: 0.5rem;
`

export const Tech = styled.span`

    @media screen and (max-width: 576px) {
        padding: ${props => props.theme.padding.xs};
        font-size: 1em;
    }
    @media screen and (min-width: 576px) {
        &:not(:last-child):after {
            color:rgb(204, 0, 102);
            margin-right: 1rem;
            margin-left: 1rem;
            font-weight: bold;
            content: '//';
        }
    }
`

export const ProjectLinks = styled.div`
    display: flex;
    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`

export const LinkIcon = styled.img`
    margin-right:0.5rem;
    height: 1em;
`

export const ProjectLink = styled.div`
    margin-right: ${props => props.theme.margin.m};
    margin-bottom: ${props => props.theme.margin.s};
    display: flex;
    align-items:center;
`

