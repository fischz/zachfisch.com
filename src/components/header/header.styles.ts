import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #eeeeee;
    position: sticky;
    height: 100vh;
    top: 0;

    @media screen and (max-width: 576px) {
        justify-content: space-between;
        flex-direction: row;
        height: auto;
        z-index: 1;
    }
`

export const NavBar = styled.div`
    @media screen and (min-width: 576px){
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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
    @media screen and (max-width: 576px) {
        position: absolute;
        right: 0;
        max-height: ${props => props.isOpen? '20rem': '0rem'};
        overflow-y: hidden;
        background: #EEEEEE;
        transition: max-height 256ms ease-out;
        width: 100%;
    }
`

export const NavItem = styled.div`
    font-weight: bold;
    padding: ${props => props.theme.padding.m};
    
    a, a:visited, a:active, a:link {
        color: ${props => props.theme.colors.text}
    }

    a:hover {
        color: ${props => props.theme.colors.accent}
    }
`

export const NavSeperator = styled.div`
    border-bottom: 1px solid ${props => props.theme.colors.text};
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
`