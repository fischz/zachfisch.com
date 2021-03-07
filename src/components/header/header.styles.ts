import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    position: absolute;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding-left: 3rem;
    padding-right: 3rem;
    width: 100%;
    background: #FFFFFF;

    @media screen and (max-width: 576px) {
        padding: 0%;
        z-index: 1;
        position: fixed;
        width: 100%;
    }
`

export const NavBar = styled.div`

`

export const Hamburger = styled.div`
    padding: ${props => props.theme.padding.s};
    transition-property: transform;
    transition-duration: 256ms;
    transition-timing-function: ease;
    display: none;
    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 576px) {
        display: block;
    }
`

interface NavItemsProps {
    isOpen?: boolean    
}

export const NavItems = styled.div<NavItemsProps>`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 576px) {
        flex-direction: column;
        position: absolute;
        right: 0;
        max-height: ${props => props.isOpen? '20rem': '0rem'};
        overflow-y: hidden;
        background: #FFFFFF;
        transition: max-height 256ms ease-out;
        width: 100%;
    }
`

interface NavItemProps{
    externalLink?: boolean
}

export const NavItem = styled.div<NavItemProps>`
    padding: ${props => props.theme.padding.m};
    

    a, a:visited, a:active, a:link {
        font-weight: normal;
        color: ${props => props.externalLink?  'rgba(0,0,0,0.6)': props.theme.colors.text};
    }

    a:hover {
        color: ${props => props.theme.colors.accent};
    }
`

export const NavSeperator = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.text};
    opacity: 0.8;
`

export const NavIcon = styled(StaticImage)`
    height: 1em;
`

export const Content = styled.div`
    padding: ${ props => props.theme.padding.m};
`

export const Name = styled.div`
    font-size: 2em;
`

export const TitleGroup = styled.div`
    padding: ${ props => props.theme.padding.m};
`

export const Title = styled.h4`
    margin: 0;
    margin-bottom: ${props => props.theme.margin.s};
`

export const SubTitle = styled.h5`
    margin: 0;
    margin-bottom: ${props => props.theme.margin.s};
    color: ${props => props.theme.colors.accent};
`