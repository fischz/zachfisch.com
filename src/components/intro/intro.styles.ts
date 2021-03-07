import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const IntroContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: ${props => props.theme.padding.m};
    font-size: 1.5em;
    background: ${props => props.theme.colors.background};
`
