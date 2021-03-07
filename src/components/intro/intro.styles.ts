import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const IntroContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: left;
    padding: ${props => props.theme.padding.m};
    font-size: 1.5em;
    background: ${props => props.theme.colors.background};
    padding: 2rem;
    @media screen and (max-width: 576px) {
        text-align: center;
    }
`

export const Row = styled.div`
    display: flex;
    max-width: 800px;
    margin: auto;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`

export const CodeBlock = styled.div`
    width: auto;
    height: auto;
    flex: 0 0 auto;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin-right: 2rem;
    font-size: 1rem;
    text-align: left;
    @media screen and (max-width: 576px) {
        display: none;
    }
`