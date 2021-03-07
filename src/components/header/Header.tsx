import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react'
import { HeaderContainer, NavItem, NavItems, Title, SubTitle, TitleGroup, NavIcon, NavSeperator, Hamburger, NavBar } from './header.styles'

const Header: React.FC = () => {

    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

    const toggleHamburger = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    }

    return <HeaderContainer>
                <TitleGroup>
                    <Title>Zach Fisch</Title>
                    <SubTitle>Web Development</SubTitle>
                </TitleGroup>
                <NavBar>
                    <Hamburger>
                        <button className={`hamburger hamburger--collapse ${isHamburgerOpen? 'is-active': ''}`} type="button" onClick={toggleHamburger}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </Hamburger>
                    <NavItems isOpen={isHamburgerOpen}>
                        <NavItem>
                            <Link to='/'> About </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/#projects'> Projects </Link>
                        </NavItem>
                        <NavItem externalLink={true}>
                            <a href='/zachfisch.pdf'>Resume </a>
                        </NavItem>
                        <NavItem externalLink={true}>
                            <a href='https://github.com/fischz'>Github</a>
                        </NavItem>
                        <NavItem externalLink={true}>
                            <a href='https://www.linkedin.com/in/zachfisch/'>LinkedIn</a>
                        </NavItem>
                    </NavItems>
                </NavBar>
        </HeaderContainer>

}

export default Header;